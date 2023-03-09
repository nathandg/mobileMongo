/* eslint-disable react/react-in-jsx-scope */
import {NavigationProp} from '@react-navigation/native';
import {Formik} from 'formik';
import LottieView from 'lottie-react-native';
import {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import * as Yup from 'yup';

import HeaderComponent from '../../components/header';
import MyButton from '../../components/myButton';
import styles from './style';

interface Props {
  navigation: NavigationProp<Record<string, unknown>>;
}

class NewDataBase extends Component<Props> {
  validationSchema = Yup.object().shape({
    mongoUri: Yup.string().required('Mongo URI is required'),
    username: Yup.string(),
    password: Yup.string(),
  });

  insetUsernameAndPassword = (
    username: string,
    password: string,
    mongoUri: string,
  ) => {
    //insert username and password in mongoUri
    const splitProtocol = mongoUri.split('://');

    if (splitProtocol[1].includes('@')) {
      const lastPart = splitProtocol[1].split('@')[1];
      return `${splitProtocol[0]}://${username}:${password}@${lastPart}`;
    }

    return `${splitProtocol[0]}://${username}:${password}@${splitProtocol[1]}`;
  };

  getCredentialsByUri = (mongoUri: string) => {
    //mongodb://username:password@localhost:27017
    const splitProtocol = mongoUri.split('://');

    //if splitProtocol[1] contains @
    if (splitProtocol[1].includes('@')) {
      const splitCredentials = splitProtocol[1].split('@');
      const credentials = splitCredentials[0].split(':');
      return {
        username: credentials[0],
        password: credentials[1],
      };
    } else {
      return {
        username: '',
        password: '',
      };
    }
  };

  render() {
    return (
      <View>
        <HeaderComponent
          title="New Database"
          subtitle="Cloud Prod - Atlas"
          favorite={true}
          navigation={this.props.navigation}
        />

        <Formik
          initialValues={{
            mongoUri: 'mongodb://localhost:27017',
            username: '',
            password: '',
          }}
          onSubmit={values => console.log(values)}
          validationSchema={this.validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <View style={styles.FieldContent}>
                <Text style={styles.FieldLabel}>URI</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={mongoUri => {
                    const credentials = this.getCredentialsByUri(mongoUri);
                    handleChange('mongoUri')(mongoUri);
                    handleChange('username')(credentials.username);
                    handleChange('password')(credentials.password);
                  }}
                  onBlur={handleBlur('mongoUri')}
                  value={values.mongoUri}
                  placeholder="Mongo URI"
                />
                {errors.mongoUri && touched.mongoUri && (
                  <Text style={styles.errorField}>{errors.mongoUri}</Text>
                )}
              </View>

              <View style={styles.FieldContent}>
                <Text style={styles.FieldLabel}>Username</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={username => {
                    handleChange('mongoUri')(
                      this.insetUsernameAndPassword(
                        username,
                        values.password,
                        values.mongoUri,
                      ),
                    );
                    handleChange('username')(username);
                  }}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  placeholder="Username"
                />
                {errors.username && touched.username && (
                  <Text style={styles.errorField}>{errors.username}</Text>
                )}
              </View>

              <View style={styles.FieldContent}>
                <Text style={styles.FieldLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={password => {
                    handleChange('mongoUri')(
                      this.insetUsernameAndPassword(
                        values.username,
                        password,
                        values.mongoUri,
                      ),
                    );
                    handleChange('password')(password);
                  }}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorField}>{errors.password}</Text>
                )}
              </View>

              {/* <Button onPress={handleSubmit} title="Submit" /> */}
              <LottieView
                source={require('../../../assets/Lottie/Server2.json')}
                autoPlay
                duration={10000}
                style={styles.lottie}
              />

              <MyButton title="Save" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
        <View />
      </View>
    );
  }
}

export default NewDataBase;

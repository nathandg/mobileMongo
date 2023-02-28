import {Formik} from 'formik';
import LottieView from 'lottie-react-native';
import {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import * as Yup from 'yup';
import styles from './style';

class NewDataBase extends Component {
  validationSchema = Yup.object().shape({
    mongoUri: Yup.string().required('Mongo URI is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  render() {
    return (
      <View>
        <Text>Nova Database</Text>

        <Formik
          initialValues={{
            mongoUri: '',
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
                <Text style={styles.uriLabel}>URI</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('mongoUri')}
                  onBlur={handleBlur('mongoUri')}
                  value={values.mongoUri}
                  placeholder="Mongo URI"
                />
                {errors.mongoUri && touched.mongoUri && (
                  <Text style={styles.errorField}>{errors.mongoUri}</Text>
                )}
              </View>

              <View style={styles.FieldContent}>
                <Text style={styles.uriLabel}>Username</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  placeholder="Username"
                />
                {errors.username && touched.username && (
                  <Text style={styles.errorField}>{errors.username}</Text>
                )}
              </View>

              <View style={styles.FieldContent}>
                <Text style={styles.uriLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorField}>{errors.password}</Text>
                )}
              </View>

              <Button onPress={handleSubmit} title="Submit" />
              <LottieView
                source={require('../../../assets/Lottie/Server2.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          )}
        </Formik>
        <View></View>
      </View>
    );
  }
}

module.exports = NewDataBase;

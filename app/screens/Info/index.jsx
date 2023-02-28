import React from 'react';
import {Button, Image, Pressable, Text, View} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';

class Info extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <LottieView 
          source={require('/home/nathan/repostorios/mobileMongo/assets/Lottie/mongo_animation.json')}
          autoPlay
          loop
          style={styles.icon}
        />
        <LottieView
          source={require('/home/nathan/repostorios/mobileMongo/assets/Lottie/Info_Lottie.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
        <View style={styles.infos}>
          <Text style={styles.title}>Mongo Mobile</Text>
          <Text style={styles.text}>
            Gerencie seus dados do MongoDB de forma fácil e intuitiva
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
      </View>
    );
  }
}

export default Info;

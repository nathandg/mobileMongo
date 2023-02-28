import LottieView from 'lottie-react-native';
import React, {Component} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './style';
import SavedConnectionCard from '/home/nathan/repostorios/mobileMongo/app/components/cards/SavedConnectionCard.jsx';

type HomeProps = {
  navigation: any;
};

class Home extends Component<HomeProps> {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => this.props.navigation.navigate('Info')}>
            <LottieView
              source={require('../../../assets/Lottie/mongo_animation.json')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Home</Text>
        </View>

        <View>
          <Text style={styles.subTitle}>Conexões Salvas</Text>
          <ScrollView
            horizontal={true}
            style={styles.SavedConnections}
            showsHorizontalScrollIndicator={false}>
            <SavedConnectionCard title="Cloud Prod - Atlas" />
            <SavedConnectionCard title="Database" />
            <SavedConnectionCard title="Cloud Dev" />
          </ScrollView>
        </View>

        <View>
          <View style={styles.RecentHeader}>
            <Text style={styles.subTitle}>Recentes</Text>
            <Text style={styles.subTitle2}>Apagar Tudo</Text>
          </View>
          <ScrollView style={styles.RecentConnections}>
            <SavedConnectionCard title="Cloud Prod - Atlas" />
          </ScrollView>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Info')}>
          <Text style={styles.buttonText}>Conectar DB</Text>
        </Pressable>
      </View>
    );
  }
}

export default Home;

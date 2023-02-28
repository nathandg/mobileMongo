import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
import SavedConnectionCard from '/home/nathan/repostorios/mobileMongo/app/components/cards/SavedConnectionCard.jsx';

type HomeProps = {
  navigation: any;
};

class Home extends Component<HomeProps> {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Info')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={styles.SavedConnections}
          showsHorizontalScrollIndicator={false}>
          <SavedConnectionCard title="Cloud Prod - Atlas" />
          <SavedConnectionCard title="Cloud Prod - Atlas" />
          <SavedConnectionCard title="Cloud Prod - Atlas" />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

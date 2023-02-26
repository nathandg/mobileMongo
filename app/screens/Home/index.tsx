import React, {Component} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

type HomeProps = {
  navigation: any;
};

class Home extends Component<HomeProps> {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Info')}>
        <Text>Home</Text>
      </TouchableOpacity>
    );
  }
}

export default Home;

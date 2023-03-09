import {NavigationProp} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

class HeaderComponent extends Component<Props> {
  state = {
    animation: null,
    favorite: this.props.favorite,
  };

  handleAnimation = () => {
    this.state.animation === false ? this.setState({animation: true}) : null;
  };

  setAnimation = (animation: LottieView | null) => {
    this.setState({animation});
  };

  toggleFavorite = () => {
    this.setState({favorite: !this.state.favorite});
    console.log('Favorite is', this.state.favorite);
  };

  render() {
    const {title, subtitle, navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: 'https://www.pngkey.com/png/full/969-9694963_png-file-svg-back-button-icon-png.png',
              }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        <View style={styles.favContainer}>
          <TouchableOpacity onPress={this.toggleFavorite}>
            {!this.state.favorite && (
              <LottieView
                source={require('../../../assets/Lottie/favAction.json')}
                autoPlay
                style={styles.favIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

interface Props {
  title: string;
  subtitle?: string;
  navigation: NavigationProp<Record<string, unknown>>;
  favorite?: boolean;
}

export default HeaderComponent;

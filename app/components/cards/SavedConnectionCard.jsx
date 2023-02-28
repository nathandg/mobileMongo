import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import AnimatedLottieView from 'lottie-react-native';

class SavedConnectionCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedLottieView
          source={require('../../../assets/Lottie/mongo_animation.json')}
          loop
          style={styles.icon}
        />
        <Text>{this.props.title}</Text>
        <AnimatedLottieView
          source={require('../../../assets/Lottie/love.json')}
          loop
          style={styles.iconFav}
        />
      </View>
    );
  }
}

SavedConnectionCard.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    height: 80,
    padding: 5,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 50,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    paddingHorizontal: 30,
  },
  icon: {
    height: 50,
  },
  iconFav: {
    height: 20,
  },
};

export default SavedConnectionCard;

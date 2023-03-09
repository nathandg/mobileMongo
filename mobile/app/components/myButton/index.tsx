// imrc => react + component
import React, {Component} from 'react';
// imrn => $1 from 'react-native';
import {Text, TouchableOpacityProps, TouchableOpacity} from 'react-native';
import styles from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

class MyButton extends Component<Props> {
  render() {
    const {title, onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default MyButton;

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../images/google.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

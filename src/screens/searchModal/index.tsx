import React, {Component} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {Icon} from 'native-base';

import {styles} from './styles';

export default class SearchModal extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Icon name="google" type="AntDesign" style={styles.googleIcon} />
          <TextInput placeholder="Search..." style={styles.textInput} />
          <Icon name="mic" style={styles.micIcon} />
        </View>
      </ScrollView>
    );
  }
}

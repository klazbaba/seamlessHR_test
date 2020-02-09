import React, {Component} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {Icon} from 'native-base';

import {styles} from './styles';
import SearchItem from './_components/searchItem';

interface Props {}

interface State {
  text: string;
}

const mockData = require('../../mockData.json');

export default class SearchModal extends Component<Props, State> {
  state = {
    text: '',
  };

  handleTextChange = text => {
    this.setState({text});
    for (const item in mockData) {
      if (item.toLowerCase().includes(text.toLowerCase())) console.warn(item);
    }
  };

  render() {
    const {text} = this.state;

    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Icon name="google" type="AntDesign" style={styles.googleIcon} />
          <TextInput
            placeholder="Search..."
            style={styles.textInput}
            onChangeText={this.handleTextChange}
            value={text}
          />
          <Icon name="mic" style={styles.micIcon} />
        </View>

        <SearchItem label="Enu gbe!" />
      </ScrollView>
    );
  }
}

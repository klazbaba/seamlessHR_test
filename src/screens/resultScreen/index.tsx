import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

interface Props {
  navigation: any;
}

export default class ResultScreen extends Component<Props> {
  word: string;
  definition: string;

  constructor(props) {
    super(props);
    const {getParam} = this.props.navigation;
    this.word = getParam('word');
    this.definition = getParam('definition');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.word}</Text>
        <Text>{this.definition}</Text>
      </View>
    );
  }
}

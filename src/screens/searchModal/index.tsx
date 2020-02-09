import React, {Component} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {Icon} from 'native-base';
import {debounce} from 'lodash';

import {styles} from './styles';
import SearchItem from './_components/searchItem';

interface Props {
  navigation: any;
  closeModal: () => void;
}

interface State {
  text: string;
  filteredData: Array<string>;
}

const mockData = require('../../mockData.json');

export default class SearchModal extends Component<Props, State> {
  state = {
    text: '',
    filteredData: [],
  };

  handleTextChange = text => {
    this.setState({text});
    this.filterData();
  };

  filterData = debounce(() => {
    const {text, filteredData} = this.state;
    this.setState({filteredData: []});

    for (const item in mockData) {
      if (item.toLowerCase().includes(text.toLowerCase())) {
        filteredData.push(item);
        this.setState({filteredData});
      }
    }
  }, 1000);

  renderFilteredItems = () => {
    const {filteredData} = this.state;
    const {
      navigation: {navigate},
      closeModal,
    } = this.props;

    return filteredData.map(item => (
      <SearchItem
        label={item}
        onPress={() => {
          closeModal();
          navigate('ResultScreen', {
            word: item,
            definition: mockData[item],
          });
        }}
      />
    ));
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

        {this.renderFilteredItems()}
      </ScrollView>
    );
  }
}

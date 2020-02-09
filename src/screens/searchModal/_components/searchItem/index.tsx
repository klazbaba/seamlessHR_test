import React from 'react';
import {ListItem, List, Icon, Left, Right, Body} from 'native-base';
import {Text} from 'react-native';

import {styles} from './styles';

interface Props {
  label: string;
}

export default function SearchItem(props: Props) {
  return (
    <List>
      <ListItem icon style={styles.listItem}>
        <Left>
          <Icon name="search" style={styles.leftIcon} />
        </Left>

        <Body style={styles.borderLess}>
          <Text style={styles.label}>{props.label}</Text>
        </Body>

        <Right style={styles.borderLess}>
          <Icon name="arrowup" type="AntDesign" style={styles.goArrow} />
        </Right>
      </ListItem>
    </List>
  );
}

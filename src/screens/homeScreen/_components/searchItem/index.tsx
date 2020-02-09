import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {Icon} from 'native-base'

import {styles} from './styles';

interface Props {
  title: string;
  content: string;
  thumbnail: any
}

export default function SearchItem(props: Props) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headline}>{props.title}</Text>
        <Image
          source={props.thumbnail}
          style={styles.image}
        />
      </View>

      <Text style={styles.content}>{props.content}</Text>

      <View style={styles.bottomSection}>
        <Icon name='google' type='AntDesign' style={styles.googleIcon}/>
        <Text style={styles.text}>{'Google.com \u2022'}</Text>
        <Text style={[styles.text, {marginLeft: 8, flex: 1}]}>1 day ago</Text>

        <Icon
            name="dots-three-vertical"
            type="Entypo"
            style={styles.moreIcon}
          />
      </View>
    </TouchableOpacity>
  );
}

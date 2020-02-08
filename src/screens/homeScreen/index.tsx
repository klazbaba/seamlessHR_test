import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Icon} from 'native-base';

import {styles} from './styles';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../images/google.png')}
          style={styles.logo}
        />
        <View style={styles.inputWrapper}>
          <Text style={styles.sayHeyText}>Say "Hey Google"</Text>
          <Icon name="mic" style={styles.mic} />
        </View>

        <View style={styles.weatherSection}>
          <Icon
            name="wb-sunny"
            type="MaterialIcons"
            style={styles.weatherIcon}
          />

          <View>
            <Text style={styles.smallText}>{'95\u00B0F in Edu Town'}</Text>
            <Text style={styles.smallText}>Sunny</Text>
          </View>

          <View>
            <Text style={styles.smallText}>{'95\u00B0F / 76\u00B0F'}</Text>
            <View style={styles.bottomRow}>
              <Icon name="umbrella" style={styles.umbrellaIcon} />
              <Text style={styles.smallText}>0% today</Text>
            </View>
          </View>

          <Icon
            name="dots-three-vertical"
            type="Entypo"
            style={styles.moreIcon}
          />
        </View>
      </View>
    );
  }
}

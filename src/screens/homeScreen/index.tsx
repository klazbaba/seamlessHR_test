import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Modal,
} from 'react-native';
import {Icon, Fab} from 'native-base';
import {connect} from 'react-redux';

import {styles} from './styles';
import SearchItem from './_components/searchItem';
import {showModal, changeTextInputBackgroundColor} from '../../actions';
import {colors} from '../../colors';
import SearchModal from '../searchModal';

const animationValue = new Animated.Value(0);
const AnimatableTextInput = Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
  showModal: boolean;
  toggleModal: (state: boolean) => void;
  textInputBackgroundColor?: string;
  toggleBackgroundColor: (color?: string) => void;
  navigation: any;
}

class HomeScreen extends Component<Props> {
  moveTextInput = (moveTo: number, showModal: boolean) => {
    const {toggleModal} = this.props;

    Animated.timing(animationValue, {
      toValue: moveTo,
      duration: 800,
      useNativeDriver: true,
    }).start(() => toggleModal(showModal));
  };

  handleTextInputPress = () => {
    const {toggleBackgroundColor} = this.props;

    this.moveTextInput(-148, true);
    toggleBackgroundColor(colors.lightgrey);
  };

  closeModal = () => {
    const {toggleModal, toggleBackgroundColor} = this.props;

    this.moveTextInput(0, false);
    toggleBackgroundColor(colors.white);
    toggleModal(false);
  };

  render() {
    const {showModal, textInputBackgroundColor, navigation} = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container} style={{flex: 1}}>
        <Fab position="topRight" style={styles.fab}>
          <Text>A</Text>
        </Fab>

        <Image
          source={require('../../images/google.png')}
          style={styles.logo}
        />

        <AnimatableTextInput
          style={[
            styles.inputWrapper,
            {transform: [{translateY: animationValue}]},
            {backgroundColor: textInputBackgroundColor},
          ]}
          onPress={this.handleTextInputPress}>
          <Text style={styles.sayHeyText}>Say "Hey Google"</Text>
          <Icon name="mic" style={styles.mic} />
        </AnimatableTextInput>

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

        <SearchItem
          title="Bolt, Uber Under Fire as Lagos State Clamps Down on Commercial Drivers"
          content="Bolt, Uber, OCar and other ride-hailing startups have co..."
          thumbnail={require('../../images/uber.jpeg')}
        />
        <SearchItem
          title="Top 3 VS Code Extensions for Python and Data Science"
          content="IDE's are awesome. If you don't know what an IDE is, it..."
          thumbnail={require('../../images/vs_code.jpeg')}
        />

        <Modal visible={showModal} onRequestClose={this.closeModal}>
          <SearchModal navigation={navigation} closeModal={this.closeModal} />
        </Modal>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.toggleModal.showModal,
  textInputBackgroundColor: state.toggleBackgroundColor.color,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: state => dispatch(showModal(state)),
  toggleBackgroundColor: color =>
    dispatch(changeTextInputBackgroundColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

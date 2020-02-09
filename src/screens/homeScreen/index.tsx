import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Icon, Fab} from 'native-base';
import {connect} from 'react-redux';

import {styles} from './styles';
import SearchItem from '../_components/searchItem';
import {showModal} from '../../actions';
import {colors} from '../../colors';

const animationValue = new Animated.Value(0);
const AnimatableTextInput = Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
  showModal: boolean;
  toggleModal: (state: boolean) => void;
}

class HomeScreen extends Component<Props> {
  moveTextInput = () => {
    Animated.timing(animationValue, {
      toValue: -150,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  handleTextInputPress = () => {
    this.props.toggleModal(true);
    this.moveTextInput();
  };

  componentDidMount = () => this.props.toggleModal(false);

  render() {
    const {showModal} = this.props;

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
            {backgroundColor: showModal ? colors.lightgrey : null},
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
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.toggleModal.showModal,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: state => dispatch(showModal(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

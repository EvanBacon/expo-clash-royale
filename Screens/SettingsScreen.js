import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebBrowser } from 'expo';
import { View } from '../differently-native';
import Assets from '../Assets';
import Screen from '../components/Screen';
import isIphoneX, { paddingTop } from '../utils/isIphoneX';
import TitleCell from '../components/TitleCell';
import SillyButton from '../components/SillyButton';
import ValueIndicator from '../components/ValueIndicator';
import BounceResizeButton from '../components/BounceResizeButton';
import CartoonText from '../components/CartoonText';

const ButtonCell = ({ title, children, color, buttonTitle, onPress }) => (
  <View
    style={{
      // justifyContent: 'space-around',
      alignItems: 'center',
      width: '50%',
      backgroundColor: 'green',
      // marginHorizontal: 8,
    }}
  >
    <CartoonText
      style={{
        marginBottom: 2,
        fontSize: 12,
        color: 'black',
        shadowOpacity: 0,
        minHeight: 20,
      }}
    >
      {title}
    </CartoonText>
    <BounceResizeButton
      onPress={onPress}
      imageProps={{
        style: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 36,
        },
        resizeMethod: 'scale',

        source: Assets.images.buttons[color + '.png'],
      }}
      style={{ width: '100%' }}
    >
      <CartoonText style={{ fontSize: 18 }}>{buttonTitle}</CartoonText>
    </BounceResizeButton>
  </View>
);

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Settings`,
    headerStyle: {
      backgroundColor: '#767B89',
    },
    headerTitleStyle: {
      fontFamily: 'expro-magic',
      color: '#ffffff',
      // backgroundColor: 'transparent',
      // borderBottomWidth: 0,
      // shadowOpacity: 0,
      // zIndex: 100,
      // position: 'absolute',
      // top: 0,
      // left: 0,
      // right: 0,
    },
  });

  getChestSlot = ({ image, color }) => (
    <BounceResizeButton
      imageProps={{
        style: {
          flex: 1,
          opacity: image ? 1 : 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        },
        resizeMethod: 'scale',
        source: Assets.images.buttons[color + '.png'],
      }}
      style={{ flex: 1 }}
    >
      {image && (
        <Image
          source={image}
          style={{ flex: 0.65, aspectRatio: 1, resizeMode: 'contain' }}
        />
      )}
      <CartoonText style={{ fontSize: 12, textAlign: 'center' }}>
        {image ? 'OPEN' : 'Chest\nSlot'}
      </CartoonText>
    </BounceResizeButton>
  );

  getSquareButton = ({ image, color, notifications }) => (
    <BounceResizeButton
      imageProps={{
        style: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio: 1,
          padding: 8,
        },
        resizeMethod: 'scale',
        source: Assets.images.buttons[color + '.png'],
      }}
      style={{ maxWidth: 56, aspectRatio: 1 }}
    >
      <Image source={image} style={{ flex: 1, resizeMode: 'contain' }} />
    </BounceResizeButton>
  );

  render() {
    const items = [
      {
        title: 'Music',
        color: 'yellow',
        buttonTitle: 'On',
        onPress: () => {},
      },
      {
        title: 'Music',
        color: 'yellow',
        buttonTitle: 'On',
        onPress: () => {},
      },
      {
        title: 'Music',
        color: 'yellow',
        buttonTitle: 'On',
        onPress: () => {},
      },
      {
        title: 'Music',
        color: 'yellow',
        buttonTitle: 'On',
        onPress: () => {},
      },
    ];
    return (
      <Screen>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            {items.map((item, index) => <ButtonCell key={index} {...item} />)}
          </View>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C4A5C',
  },
  innerContainer: {
    margin: 16,
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#E5EEF3',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

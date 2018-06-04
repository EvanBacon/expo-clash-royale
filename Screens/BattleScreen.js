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

export default class BattleScreen extends React.Component {
  get topRow() {
    //Info
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          height: 48,
        }}
      >
        <TitleCell
          title={'Masterbacon'}
          subtitle={'No Clan'}
          subtitleStyle={{ fontSize: 8, color: 'yellow' }}
          titleStyle={{ fontSize: 10 }}
          image={{
            uri:
              'https://cdn-images-1.medium.com/fit/c/58/58/0*7hpwPqrKW-8i1C3u.jpg',
          }}
        >
          <ValueIndicator
            value={0}
            tint={'#E5B964'}
            image={Assets.images.icons['coin.png']}
          />
        </TitleCell>

        <SillyButton
          tintColor={'#5A60A4'}
          style={{
            aspectRatio: 1,
            width: 64,
          }}
        >
          S
        </SillyButton>
      </View>
    );
  }

  get actionButtons() {
    return (
      <View style={{ height: 72, marginTop: 12, flexDirection: 'row' }}>
        <SillyButton tintColor="yellow" style={{ marginRight: 12, flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
      </View>
    );
  }

  get bottomRow() {
    //Chests
    return (
      <View style={{ height: 72, marginTop: 12, flexDirection: 'row' }}>
        <SillyButton tintColor="yellow" style={{ flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
      </View>
    );
  }

  get sideMissionRow() {
    return (
      <View style={{ height: 72, flexDirection: 'row' }}>
        <SillyButton tintColor="yellow" style={{ marginRight: 12, flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
      </View>
    );
  }

  get leftMiddleColumn() {
    return (
      <View style={{}}>
        <SillyButton tintColor="yellow" style={{ flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
      </View>
    );
  }
  get rightMiddleColumn() {
    return (
      <View style={{}}>
        <SillyButton tintColor="yellow" style={{ flex: 1 }} />
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
      </View>
    );
  }

  get middleRow() {
    return (
      <View style={{ height: 72, flexDirection: 'row' }}>
        {this.leftMiddleColumn}
        <SillyButton tintColor="blue" style={{ flex: 1 }} />
        {this.rightMiddleColumn}
      </View>
    );
  }

  render() {
    return (
      <Screen>
        <View style={styles.container}>
          {this.topRow}
          {this.sideMissionRow}
          {this.middleRow}
          {this.actionButtons}
          {this.bottomRow}
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop,
    backgroundColor: '#3C4A5C',
    paddingHorizontal: 24,
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

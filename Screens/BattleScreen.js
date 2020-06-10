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
import GucciBackdrop from '../components/GucciBackdrop';

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

        <BounceResizeButton
          imageProps={{
            style: {
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            },
            resizeMethod: 'scale',
            source: Assets.images.buttons['gray.png'],
          }}
          style={{
            aspectRatio: 1,
            width: 48,
          }}
        >
          <Image
            source={Assets.images.textures['chest.png']}
            style={{
              width: 24,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
        </BounceResizeButton>
      </View>
    );
  }

  get actionButtons() {
    return (
      <View
        style={{
          height: 84,
          marginTop: 12,
          marginHorizontal: '10%',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexDirection: 'row',
        }}
      >
        <BounceResizeButton
          imageProps={{
            style: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            resizeMethod: 'scale',
            source: Assets.images.buttons['yellow.png'],
          }}
          style={{ width: '49%' }}
        >
          <CartoonText style={{ fontSize: 18 }}>Battle</CartoonText>
        </BounceResizeButton>
        <BounceResizeButton
          imageProps={{
            style: { flex: 1, justifyContent: 'center', alignItems: 'center' },
            resizeMethod: 'scale',
            source: Assets.images.buttons['blue.png'],
          }}
          style={{ width: '49%' }}
        >
          <CartoonText style={{ fontSize: 18 }}>2v2</CartoonText>
        </BounceResizeButton>
      </View>
    );
  }

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
  get bottomRow() {
    //Chests
    return (
      <View style={{ height: 128, marginTop: 12, flexDirection: 'row' }}>
        {this.getChestSlot({ color: 'gray' })}
        {this.getChestSlot({
          color: 'yellowC',
          image: Assets.images.textures['chest.png'],
        })}
        {this.getChestSlot({ color: 'gray' })}
        {this.getChestSlot({ color: 'gray' })}
      </View>
    );
  }

  get sideMissionRow() {
    return (
      <View style={{ height: 72, marginTop: 8, flexDirection: 'row' }}>
        <BounceResizeButton
          imageProps={{
            style: {
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            },
            resizeMethod: 'scale',
            source: Assets.images.buttons['yellowB.png'],
          }}
          style={{ flex: 1 }}
          onPress={() => {
            this.props.navigation.navigate('Settings', {});
          }}
        >
          <Image
            source={Assets.images.textures['chest.png']}
            style={{
              width: 56,
              marginLeft: 12,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
          <CartoonText style={{ flex: 1, fontSize: 12, textAlign: 'center' }}>
            Quests
          </CartoonText>
        </BounceResizeButton>

        <BounceResizeButton
          imageProps={{
            style: {
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            },
            resizeMethod: 'scale',
            source: Assets.images.buttons['blueB.png'],
          }}
          style={{ flex: 1 }}
        >
          <CartoonText
            style={{
              flex: 1,
              fontSize: 10,
              color: 'cyan',
              textAlign: 'center',
            }}
          >
            Crown Chest
          </CartoonText>

          <Image
            source={Assets.images.textures['chest.png']}
            style={{
              width: 56,
              marginRight: 12,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
        </BounceResizeButton>
      </View>
    );
  }

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

  get leftMiddleColumn() {
    return (
      <View style={{ justifyContent: 'space-between' }}>
        {this.getSquareButton({
          image: Assets.images.textures['chest.png'],
          color: 'navy',
        })}
        {this.getSquareButton({
          image: Assets.images.textures['chest.png'],
          color: 'navy',
        })}
      </View>
    );
  }
  get rightMiddleColumn() {
    return (
      <View style={{ justifyContent: 'space-between' }}>
        {this.getSquareButton({
          image: Assets.images.textures['chest.png'],
          color: 'navy',
        })}
        {this.getSquareButton({
          image: Assets.images.textures['chest.png'],
          color: 'navy',
        })}
      </View>
    );
  }

  get middleRow() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        {this.leftMiddleColumn}
        <Image
          source={Assets.images.textures['level1.png']}
          style={{
            aspectRatio: 1,
            flex: 1,
            resizeMode: 'contain',
            maxWidth: '45%',
          }}
        />
        {this.rightMiddleColumn}
      </View>
    );
  }

  render() {
    // <GucciBackdrop />

    return (
      <Screen>
        <View style={styles.container}>
          <View style={{ flex: 0.3 }}>
            {this.topRow}
            {this.sideMissionRow}
          </View>
          <View style={{ flex: 0.4 }}>
            {this.middleRow}
            {this.actionButtons}
          </View>
          <View style={{ flex: 0.3 }}>{this.bottomRow}</View>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop,
    // backgroundColor: '#3C4A5C',
    paddingHorizontal: 8,
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

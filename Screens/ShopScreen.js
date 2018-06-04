import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SectionList,
} from 'react-native';
import { View } from '../differently-native';
import { WebBrowser } from 'expo';
import Assets from '../Assets';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import CartoonText from '../components/CartoonText';
import Screen from '../components/Screen';
import isIphoneX, { paddingTop } from '../utils/isIphoneX';

const { height } = Dimensions.get('window');

const EmptyShopList = () => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
      paddingTop: 30,
      height: height * 0.75,
    }}
  >
    <View
      style={{
        width: 64,
        aspectRatio: 1,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
      }}
    >
      <Image
        source={Assets.images.icons['store.png']}
        style={{ resizeMode: 'contain', flex: 1 }}
      />
    </View>
    <CartoonText style={{ fontSize: 20 }}>Shop Unlocks</CartoonText>
    <CartoonText style={{ fontSize: 16, color: '#5ECCFE' }}>
      At Arena 1
    </CartoonText>
  </View>
);

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop',
  };

  render() {
    const evanImage = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Evan_Bacon%2C_Design_Technologist_II_at_Frog_Design.jpg',
    };
    return (
      <Screen>
        <View style={styles.container}>
          <ShopList
            style={styles.container}
            contentContainerStyle={[
              styles.contentContainer,
              { marginTop: paddingTop },
            ]}
            ListEmptyComponent={EmptyShopList}
          />
        </View>
      </Screen>
    );
  }
}

import Shop from '../models/Shop/Shop';
import TouchableBounce from '../components/TouchableBounce';

const PINK = '#FE0A5B';
class ShopListItem extends React.PureComponent {
  render() {
    const { title, ...props } = this.props;
    return (
      <TouchableBounce style={{ height: 96, marginVertical: 8 }}>
        <DopeButtonImage style={{ width: '100%', flex: 1 }}>
          <CartoonText>{title}</CartoonText>
        </DopeButtonImage>
      </TouchableBounce>
    );
  }
}

class DopeButtonImage extends React.PureComponent {
  get capInsets() {
    const inset = 50;
    return {
      top: inset,
      left: inset,
      bottom: inset,
      right: inset,
    };
  }
  render() {
    const { ...props } = this.props;
    return (
      <ImageBackground
        resizeMode="stretch"
        source={Assets.images.buttons['blue.png']}
        capInsets={this.capInsets}
        {...props}
      />
    );
  }
}

class ShopListSectionHeader extends React.PureComponent {
  render() {
    const { title, ...props } = this.props;
    return (
      <View
        style={{
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: 'rgba(0,0,0,0.35)',
          width: '100%',
          paddingVertical: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: PINK,
        }}
      >
        <CartoonText>{title}</CartoonText>
      </View>
    );
  }
}

class ShopList extends React.Component {
  renderSectionHeader = ({ section }) => <ShopListSectionHeader {...section} />;

  renderItem = ({ item, index, section }) => (
    <ShopListItem key={index} {...item} />
  );

  render() {
    const { ...props } = this.props;
    return (
      <SectionList
        {...props}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={Shop.shared.isles}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C4A5C',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {},
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

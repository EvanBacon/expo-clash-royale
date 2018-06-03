import 'redux';

import { WebBrowser } from 'expo';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import WoodTexture from '../components/WoodTexture';
import { View } from '../differently-native';
import Fire from '../Firebase/Fire';
import CartoonText from '../components/CartoonText';
import Card from '../components/Card';
import Assets from '../Assets';
import ValueIndicatorBar from '../components/ValueIndicatorBar';

const CardListHeader = () => (
  <CartoonText
    style={{
      fontSize: 16,
      textAlign: 'center',
      paddingBottom: 16,
    }}
  >
    Battle Deck
  </CartoonText>
);

const CardListFooterComponent = () => (
  <View
    style={{
      backgroundColor: '#583722',
      marginTop: 16,
      borderRadius: 4,
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CartoonText
      style={{
        fontSize: 12,
        color: '#FF66FF',
        textAlign: 'center',
      }}
    >
      Average Elixer cost: 3.5
    </CartoonText>
  </View>
);

class CardList extends React.Component {
  renderItem = ({ item }) => {
    return <Card {...item} />;
  };
  render() {
    const { props } = this;

    return (
      <WoodTexture
        style={{
          padding: 16,
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        <FlatList
          columnWrapperStyle={{
            padding: 4,
            flex: 1,
            justifyContent: 'space-between',
          }}
          numColumns={3}
          renderItem={this.renderItem}
          ListHeaderComponent={CardListHeader}
          ListFooterComponent={CardListFooterComponent}
          {...props}
        />
      </WoodTexture>
    );
  }
}

class CardsScreen extends React.Component {
  static navigationOptions = {
    title: 'Cards',
    // tabBarIcon:
  };

  render() {
    const evanImage = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Evan_Bacon%2C_Design_Technologist_II_at_Frog_Design.jpg',
    };

    const cards = [
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {
        image: evanImage,
        nextLevel: { max: 5, value: 3 },
        tint: '#70C65F',
        level: 3,
      },
      {},
      {},
    ];

    const items = [
      {
        image: Assets.images.icons['store.png'],
        tint: 'yellow',
        value: 123,
      },
      {
        image: Assets.images.icons['cards.png'],
        tint: 'green',
        value: 123,
      },
      {
        image: Assets.images.icons['battle.png'],
        tint: 'orange',
        value: 123,
      },
    ];

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <ValueIndicatorBar items={items} />

          <CardList data={cards} />
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode',
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes',
    );
  };
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

export default connect(({ auth }) => ({
  auth,
}))(CardsScreen);

import 'redux';

import React from 'react';
import { FlatList, Platform, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Card from '../components/Card';
import CartoonText from '../components/CartoonText';
import SillyButton from '../components/SillyButton';
import WoodTexture from '../components/WoodTexture';
import { View } from '../differently-native';
import Screen from '../components/Screen';
import isIphoneX, { paddingTop } from '../utils/isIphoneX';

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
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        <FlatList
          keyExtractor={(item, index) => index}
          columnWrapperStyle={{
            flex: 1,
            padding: 4,
            justifyContent: 'space-between',
          }}
          numColumns={3}
          contentContainerStyle={styles.contentContainer}
          renderItem={this.renderItem}
          ListHeaderComponent={CardListHeader}
          ListFooterComponent={CardListFooterComponent}
          {...props}
        />
      </WoodTexture>
    );
  }
}

const TipThing = () => (
  <View
    style={{
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 8,
      marginHorizontal: 12,
      marginVertical: 24,

      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <View style={{ justifyContent: 'space-between' }}>
      <CartoonText style={{ fontSize: 14 }}>Card Collection</CartoonText>
      <CartoonText style={{ color: '#FF9BFF', fontSize: 10 }}>
        Found: 6/84
      </CartoonText>
    </View>
    <SillyButton tintColor={'#5A60A4'}>By Arena</SillyButton>
  </View>
);

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

    return (
      <Screen>
        <View style={styles.container}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingTop: paddingTop }}
          >
            <CardList data={cards} />
            <TipThing />
          </ScrollView>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    backgroundColor: '#3C4A5C',
  },

  contentContainer: {
    padding: 16,
  },
});

export default connect(({ auth }) => ({
  auth,
}))(CardsScreen);

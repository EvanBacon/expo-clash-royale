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
import BounceResizeButton from '../components/BounceResizeButton';
import TitleCell from '../components/TitleCell';
import GucciBackdrop from '../components/GucciBackdrop';

const UndiscoveredCardListHeader = () => (
  <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#977EC7' }}>
    <CartoonText
      style={{
        fontSize: 10,
        textAlign: 'center',
        paddingBottom: 10,
        marginTop: 8,
        color: '#977EC7',
      }}
    >
      Battle Deck
    </CartoonText>
  </View>
);
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

class UndiscoveredCardList extends React.Component {
  renderItem = ({ item }) => {
    return <Card {...item} />;
  };
  render() {
    const { props } = this;

    return (
      <FlatList
        keyExtractor={(item, index) => index}
        columnWrapperStyle={{
          flex: 1,
          padding: 4,
          justifyContent: 'space-between',
          paddingBottom: 48,
        }}
        numColumns={4}
        contentContainerStyle={styles.contentContainer}
        renderItem={this.renderItem}
        ListHeaderComponent={UndiscoveredCardListHeader}
        {...props}
      />
    );
  }
}

const TipThing = () => (
  <TitleCell
    title={'Card Collection'}
    subtitle={'Found: 6/84'}
    subtitleStyle={{ fontSize: 10, color: '#FF9BFF' }}
    titleStyle={{ fontSize: 14 }}
    style={{
      marginHorizontal: 12,
      marginVertical: 24,
    }}
  >
    <SillyButton tintColor={'#5A60A4'}>By Arena</SillyButton>
  </TitleCell>
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
      // {},
      // {},
    ];
    // <GucciBackdrop light />

    return (
      <Screen>
        <View style={styles.container}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingTop: paddingTop }}
          >
            <CardList data={cards} />
            <TipThing />
            <UndiscoveredCardList data={cards} />
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
    // backgroundColor: '#3C4A5C',
  },

  contentContainer: {
    padding: 16,
  },
});

export default connect(({ auth }) => ({
  auth,
}))(CardsScreen);

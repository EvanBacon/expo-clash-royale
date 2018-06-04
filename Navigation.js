import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import BattleScreen from './Screens/BattleScreen';
import ShopScreen from './Screens/ShopScreen';
import CardsScreen from './Screens/CardsScreen';
import { Image, Text, StyleSheet, View } from 'react-native';
import Assets from './Assets';
import ValueIndicatorBar from './components/ValueIndicatorBar';

const CustomHeader = ({ title, subtitle }) => (
  <View style={{}}>
    <Text style={{}}>{title}</Text>
    <Text style={{}}>{subtitle}</Text>
  </View>
);

const getTransform = focused => {
  return focused
    ? {
        transform: [{ scale: 1.4 }, { translateY: -12 }],
      }
    : {
        transform: [{ scale: 1 }, { translateY: -4 }],
      };
};

const TabIcon = ({ icon, tintColor, focused }) => (
  <View
    style={[
      {
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        padding: 4,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 0.6,
        backgroundColor: focused ? 'white' : 'transparent',
      },
      getTransform(focused),
    ]}
  >
    <Image
      style={{
        tintColor,
        flex: 1,
        resizeMode: 'contain',
      }}
      source={icon}
    />
  </View>
);

const CardsIcon = props => (
  <TabIcon {...props} icon={Assets.images.icons['cards.png']} />
);
const ShopIcon = props => (
  <TabIcon {...props} icon={Assets.images.icons['store.png']} />
);
const BattleIcon = props => (
  <TabIcon {...props} icon={Assets.images.icons['battle.png']} />
);

const TabNavigation = TabNavigator(
  {
    Shop: {
      screen: ShopScreen,
      navigationOptions: {
        title: 'Shop',
        tabBarIcon: ShopIcon,
      },
    },
    Battle: {
      screen: BattleScreen,
      navigationOptions: {
        title: 'Battle',
        tabBarIcon: BattleIcon,
      },
    },

    Cards: {
      screen: CardsScreen,
      navigationOptions: {
        title: 'Cards',
        tabBarIcon: CardsIcon,
      },
    },
  },
  {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    cardStyle: {
      backgroundColor: '#3C4A5C',
    },
    tabBarOptions: {
      activeTintColor: '#000000',
      activeBackgroundColor: '#5682A5',
      inactiveTintColor: '#B9B9B9',
      inactiveBackgroundColor: '#344252',
      showLabel: true,
      showIcon: true,
      style: {
        height: 64,
        backgroundColor: '#344252',
        borderBottomWidth: 0,
        padding: 0,
        // borderTopWidth: 3 + StyleSheet.hairlineWidth,
        // borderTopColor: 'rgba(255,255,255,0.3)',
        borderColor: '#737D89',
        borderLeftWidth: 1 + StyleSheet.hairlineWidth,
        borderRightWidth: 1 + StyleSheet.hairlineWidth,
      },
      tabStyle: {
        borderTopWidth: 3 + StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255,255,255,0.3)',
        borderBottomWidth: 0,
        borderLeftWidth: 1 + StyleSheet.hairlineWidth,
        borderRightWidth: 1 + StyleSheet.hairlineWidth,
        borderColor: '#737D89',
        borderRightColor: '#1E2631',
      },
      labelStyle: { fontFamily: 'expro-magic', fontSize: 12 },
    },
  },
);

TabNavigation.navigationOptions = ({ title, subtitle }) => {
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

  return {
    headerTitle: <ValueIndicatorBar items={items} />,
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      shadowOpacity: 0,
      zIndex: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
  };
};

const Navigation = StackNavigator(
  {
    Main: { screen: TabNavigation },
  },
  {},
);
// navigationOptions: {
//   header: <ValueIndicatorBar items={items} />,
// },

export default Navigation;

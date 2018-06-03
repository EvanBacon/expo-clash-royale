import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import BattleScreen from './Screens/BattleScreen';
import ShopScreen from './Screens/ShopScreen';
import CardsScreen from './Screens/CardsScreen';
import { StyleSheet } from 'react-native';

const Navigation = TabNavigator(
  {
    Cards: {
      screen: CardsScreen,
    },
    Shop: {
      screen: ShopScreen,
    },
    Battle: {
      screen: BattleScreen,
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
      activeTintColor: '#ffffff',
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

export default Navigation;

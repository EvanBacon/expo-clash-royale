import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './Screens/Home';
import Explore from './Screens/Explore';
import Profile from './Screens/Profile';

const Navigation = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Explore: {
      screen: Explore,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
  }
);

export default Navigation;

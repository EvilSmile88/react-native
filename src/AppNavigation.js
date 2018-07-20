import { createStackNavigator } from 'react-navigation';
import SignInScreen from './screens/Auth';
import ListScreen from './screens/list/ListScreen';

const AppNavigation = createStackNavigator(
  {
    signIn: {
      screen: SignInScreen,
      path: 'auth/signIn',
    },
    list: {
      screen: ListScreen,
      path: 'list'
    },
  },
  {
    initialRouteName: 'signIn'
  }
);

export default AppNavigation;


import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      getScreen: () => require('./screens/homeScreen').default,
    },
    ResultScreen: {
      getScreen: () => require('./screens/resultScreen').default,
    },
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(AppStack);

export default Routes;

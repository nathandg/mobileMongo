import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/';

type RootStackParamList = {
  Home: undefined;
  Details: {userId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigation;

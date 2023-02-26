import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/';
import React from 'react';
import Info from '../screens/Info';

type RootStackParamList = {
  Home: undefined;
  Details: {userId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;

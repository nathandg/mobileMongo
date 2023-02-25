import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import MainStackNavigation from './navigation/MainStackNavigation';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

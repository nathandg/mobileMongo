/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import MainStackNavigation from './navigation/MainStackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

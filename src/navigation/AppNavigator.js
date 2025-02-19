import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SplashScreen} from '../screens/SplashScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {LanguageSelectionScreen} from '../screens/LanguageSelectionScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

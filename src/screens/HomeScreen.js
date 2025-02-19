import React from 'react';
import { View, Text, Button } from 'react-native';

import { stylesHome } from '../styles/home';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>Page d'Accueil</Text>
      <Button title="Déconnexion" onPress={() => navigation.replace('SplashScreen')} />
    </View>
  );
};

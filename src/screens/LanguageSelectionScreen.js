// src/screens/LanguageSelection.js
import React from 'react';
import { View, Text, Button } from 'react-native';

import { stylesLanguageSelection } from '../styles/languageSelection';

export const LanguageSelectionScreen = ({ navigation }) => {
  return (
    <View style={stylesLanguageSelection.container}>
      <Text style={stylesLanguageSelection.title}>Choix de la Langue</Text>
      <Button
        title="Choisir la langue"
        onPress={() => {
          navigation.replace('Home');
        }}
      />
    </View>
  );
};
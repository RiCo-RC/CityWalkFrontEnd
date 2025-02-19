import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { stylesSplashscreen } from '../styles/splashscreen';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [isFirstAppLauch, setIsFirstAppLauch] = useState(null);

  // Fonction pour récupérer l'authentification
  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsFirstAppLauch(userToken ? true : false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      setIsFirstAppLauch(false);
    }
  };

  // Lancer la progression du SplashScreen
  useEffect(() => {
    checkAuthentication();
    
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      // Si l'utilisateur n'a pas lanncé l'app pour le première fois, rediriger vers la page d'accueil
      if (isFirstAppLauch) {
        navigation.replace('HomeScreen');
      } else {
        navigation.replace('LanguageSelection');
      }
    }, 3500); 
  }, [isFirstAppLauch]);

  // Image de fond ou animation Lottie
  // const loadingImage = require('../../assets/loading_image.png'); 
  const loadingImage = require('../../assets/loading_image.png'); 

  return (
    <View style={stylesSplashscreen.container}>
      <Image source={loadingImage} style={stylesSplashscreen.image} />
      <Text style={stylesSplashscreen.text}>Chargement...</Text>

      {/* Affichage de la barre de progression */}
      <Animated.View
        style={[stylesSplashscreen.progressBar, { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}
      />

      {/* Affichage du pourcentage de progression */}
      <Text style={stylesSplashscreen.percentageText}>
        {Math.round(progress._value * 100)}%
      </Text>
    </View>
  );
};
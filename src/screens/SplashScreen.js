import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { stylesSplashscreen } from '../styles/splashscreen';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [percentage, setPercentage] = useState(0);
  const [isFirstAppLauch, setIsFirstAppLauch] = useState(null);

  // Fonction pour récupérer l'authentification
  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsFirstAppLauch(userToken ? true : false);
      console.log("userToken is", userToken);
    } catch (error) {
      console.error("Error recovering user data", error);
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

    // Barre de progression
    const progressListener = progress.addListener(({value}) => {
      setPercentage(Math.round(value * 100));
    });

    // Renvoie vers une page selon si c'est le premier lancement ou non
    setTimeout(() => {
      if (isFirstAppLauch) {
        navigation.replace('HomeScreen');
      } else {
        navigation.replace('LanguageSelectionScreen');
      }
    }, 3500); 

    return () => {
      progress.removeListener(progressListener);
    };
  }, [isFirstAppLauch]);

  // Image de fond (ou animation Lottie)
  const loadingImage = require('../../assets/images/loading_image.png'); 

  return (
    <View style={stylesSplashscreen.container}>
      <Image source={loadingImage} style={stylesSplashscreen.image} />
      <Text style={stylesSplashscreen.text}>Loading...</Text>

      {/* Affichage de la barre de progression */}
      <Animated.View
        style={[stylesSplashscreen.progressBar, { width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}
      />

      {/* Affichage du pourcentage de progression */}
      <Text style={stylesSplashscreen.percentageText}>
        {percentage}%
      </Text>
    </View>
  );
};
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, 
  Montserrat_400Regular,
  Montserrat_500Medium, 
  Montserrat_700Bold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_800ExtraBold,
  Montserrat_100Thin} from '@expo-google-fonts/montserrat';

  import { 
         Inter_100Thin,
         Inter_200ExtraLight,
         Inter_300Light,
         Inter_400Regular,
         Inter_500Medium,
         Inter_600SemiBold,
         Inter_900Black,
         
        } from '@expo-google-fonts/inter';

import Routes from './src/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_800ExtraBold,
    Montserrat_100Thin,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_900Black
  });
    if(!fontsLoaded){
      return <AppLoading/>;
    }
  return (
    <>
      <StatusBar style="" hidden={false} backgroundColor="#62AE47" translucent={false}/>
      <Routes/>
    </>
  );
}
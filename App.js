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
  Montserrat_100Thin_Italic} from '@expo-google-fonts/montserrat';

import Routes from './src/router';
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_100Thin_Italic
  });
    if(!fontsLoaded){
      return <AppLoading/>;
    }
  return (
    <>
      <StatusBar style="light" backgroundColor="#62AE47" translucent={false}/>
      <Routes/>
    </>
  );
}



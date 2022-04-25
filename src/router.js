import react from "react";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feather, FontAwesome5, Ionicons} from '@expo/vector-icons';
import{ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

import Home from "./pages/Home";
import Internet from "./pages/Internet";
import Tv from "./pages/Tv";
import Combo from "./pages/Combo";
import News from "./pages/News";
import Radio from "./pages/Radio";
import Plano from "./pages/Plano";
import Plano1 from "./pages/Plano1";
import Plano2 from "./pages/Plano2";
import Plano3 from "./pages/Plano3";
import Montar from "./pages/Montar";

import { View } from "react-native-web";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Stack = createNativeStackNavigator();

function Routes(){
   
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#62AE47' } }}>
                <Stack.Screen name="home"
                 component={Home}
                 options={{
                    title: 'BL CATÁLOGO',
                    headerTitleStyle: {
                       fontFamily:'Montserrat_700Bold',
                       color:'#FFF',
                    },
                    headerRight: ()=>(
                        <Feather name="shopping-bag" size={30} color="#FFF" marginRight={30}/>
                    ),
                 }}
                 />
                <Stack.Screen name="Internet"
                 component={Internet}
                 options={{
                    title: '',
                    headerTitleStyle: {
                       fontFamily:'Montserrat_700Bold',
                    },
                    headerRight: ()=>(
                        <Feather name="globe" size={30} color="#fff" marginRight={30}/>
                    ), 
                 }}
                 />   
                <Stack.Screen name="Tv"
                 component={Tv}
                 options={{
                    title: 'LIKE TV',
                    headerTitleStyle: {
                       fontFamily:'Montserrat_700Bold',
                    },
                    headerRight: ()=>(
                        <Feather name="tv" size={30} color="#fff" marginRight={30}/>
                    ), 
                 }}
                 />
                <Stack.Screen name="Radio"
                 component={Radio}
                 options={{
                    title: 'LIKE RÁDIO',
                    headerTitleStyle: {
                       fontFamily:'Montserrat_700Bold',
                    },
                    headerRight: ()=>(
                        <Feather name="tv" size={30} color="#fff" marginRight={30}/>
                    ), 
                 }}
                 />
                <Stack.Screen name="Combo"
                 component={Combo}
                 options={{
                    title: 'COMBOS',
                    headerTitleStyle: {
                       fontFamily:'Montserrat_700Bold',
                    },
                    headerRight: ()=>(
                        <Feather name="tv" size={30} color="#fff" marginRight={30}/>
                    ), 
                 }}
                 />
                <Stack.Screen name="News"
                 component={News}
                 options={{
                    title: 'NEWS',
                    headerTitleStyle: {
                       fontFamily:'Montserrat_700Bold',
                    },
                    headerRight: ()=>(
                     <Ionicons name="ios-sunny" size={26} color="yellow" />
                    ), 
                 }}
                 />
                 <Stack.Screen name="Plano" component={Plano}/>
                 <Stack.Screen name="Plano1" component={Plano1}/>
                 <Stack.Screen name="Plano2" component={Plano2}/>
                 <Stack.Screen name="Plano3" component={Plano3}/>
                 <Stack.Screen name="Montar" component={Montar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
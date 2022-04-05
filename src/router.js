import react from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feather} from '@expo/vector-icons';
import{ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

import Home from "./pages/Home";
import Internet from "./pages/Internet";
import Tv from "./pages/Tv";
import Combo from "./pages/Combo";

import { View } from "react-native-web";

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home"
                 component={Home}
                 options={{
                    title: 'BL CATÁLOGO',
                    headerTitleStyle: {
                       // fontFamily:'Montserrat_700Bold', 
                    },
                    headerRight: ()=>(
                        <Feather name="shopping-bag" size={30} color="#000" marginRight={30}/>
                    )
                 }}
                 />
                <Stack.Screen name="Internet" component={Internet}/>
                <Stack.Screen name="Tv" component={Tv}/>
                <Stack.Screen name="Combo" component={Combo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
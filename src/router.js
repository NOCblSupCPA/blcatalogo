import react from "react";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feather} from '@expo/vector-icons';
import{ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

import Home from "./pages/Home";
import Internet from "./pages/Internet";
import Tv from "./pages/Tv";
import Combo from "./pages/Combo";
import News from "./pages/News";

import { View } from "react-native-web";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

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
                       fontFamily:'Montserrat_700Bold',      
                       backgroundColor: '#62AE47',
                    },
                    headerRight: ()=>(
                        <Feather name="shopping-bag" size={30} color="#000" marginRight={30}/>
                    ),
                 }}
                 />
                <Stack.Screen name="Internet" component={Internet}/>
                <Stack.Screen name="Tv" component={Tv}/>
                <Stack.Screen name="Combo" component={Combo}/>
                <Stack.Screen name="News" component={News}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
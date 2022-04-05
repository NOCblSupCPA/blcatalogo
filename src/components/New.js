import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import {useFonts, 
    Montserrat_400Regular,
    Montserrat_500Medium, 
    Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function New(props) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold
      });
 return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>{props.name}</Text>
        </View>

        <Text style={styles.description}>{props.description}</Text>

        <View style={styles.footer}>
            <View style={{width:'50%'}}>
                <Text style={styles.price}>R$ 199,90</Text>
            </View>
            <View style={{width:'20%', marginTop:10}}>
                <Ionicons name="ios-add-circle" size={22} color="#333"/>
            </View>
        </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create ({
    container:{
        marginTop:20,
        backgroundColor:'#FFF',
        height:190,
        width:190,
        elevation:3,
        borderRadius:10,
        padding:15,
        marginRight:5,
        marginLeft:7,
        marginBottom:5,
    },
    title:{
        //fontFamily:'Montserrat_700Bold',
        fontSize:15,
        color:'#4f4a4a',
        marginTop:10,
    },
    description:{
        marginTop:10,
        //fontFamily:'Montserrat_500Medium',
        fontSize: 15,
        color:'#4f4a4a',
    },
    footer:{
        flexDirection:'row',
        marginTop: 5,
    },
    price:{
        marginTop:10,
        //fontFamily:'Montserrat_700Bold',
        fontSize:15,
    }
});
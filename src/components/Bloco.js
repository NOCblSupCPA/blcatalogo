import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

import {useFonts, 
    Montserrat_400Regular,
    Montserrat_500Medium, 
    Montserrat_700Bold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';

export default function Bloco(props) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_600SemiBold
      });
 return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.description1}>{props.description1}</Text>
        <Text style={styles.description2}>{props.description2}</Text>
        <Text style={styles.description3}>{props.description3}</Text>


        {/* <View style={styles.footer}>
            <View style={{width:'60%'}}>
                <Text style={styles.price}>R$ 199,90</Text>
            </View>
            <View style={{width:'20%', marginTop:10}}>
                <Ionicons name="ios-add-circle" size={22} color="#333"/>
            </View>
        </View> */}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create ({
    container:{
        flex:1,
        marginTop:5,
        backgroundColor:'#FFF',
        height:190,
        width:190,
        elevation:7,
        borderRadius:10,
        padding:15,
        marginRight:5,
        marginLeft:7,
        marginBottom:5,
        paddingHorizontal:10,
    },
    title:{
        fontFamily:'Montserrat_700Bold',
        fontSize:15,
        color:'#4f4a4a',
        marginTop:10,
    },
    description:{
        marginTop:10,
        fontFamily:'Montserrat_500Medium',
        fontSize: 13,
        color:'#4f4a4a', 
    },
    description1:{
        marginTop:5,
        fontFamily:'Montserrat_500Medium',
        fontSize: 13,
        color:'#4f4a4a',
    },
    description2:{
        marginTop:5,
        fontFamily:'Montserrat_500Medium',
        fontSize: 13,
        color:'#4f4a4a',
    },
    description3:{
        marginTop:5,
        fontFamily:'Montserrat_500Medium',
        fontSize: 13,
        color:'#4f4a4a',
    },
    // footer:{
    //     flexDirection:'row',
    //     marginTop: 5,
    // },
    // price:{
    //     marginTop:10,
    // fontFamily:'Montserrat_700Bold',
    //     fontSize:15,
    // },

});
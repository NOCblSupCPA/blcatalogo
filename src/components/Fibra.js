import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

import {useFonts, 
    Montserrat_400Regular,
    Montserrat_500Medium, 
    Montserrat_700Bold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_600SemiBold,
    Montserrat_100Thin
} from '@expo-google-fonts/montserrat';

export default function Fibra(props){
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_600SemiBold,
        Montserrat_100Thin
      });
    return(
        <View style={styles.container}>
            {/* <Text style={styles.title}>{props.name}</Text> */}
            <Text style={styles.plano}>{props.plano}</Text>
            <View style={styles.content}>
                <View style={{alignSelf:'center'}}>
                    <Text style={styles.rs}>{props.rs}</Text>
                </View>
                <Text style={styles.preco}>{props.preco}</Text>
                <View style={{flexDirection:'column', alignSelf:'flex-end'}}>
                    <Text style={styles.cent}>{props.cent}</Text>
                    <Text style={styles.mes}>{props.mes}</Text>
                </View>
            </View>
            <View style={styles.faixa}>
                 <Text style={{fontSize:20, fontFamily:'Montserrat_300Light'}}>{props.wifi}</Text>
                 <Text style={{fontSize:20,fontFamily: 'Montserrat_300Light' }}>{props.ultra}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        backgroundColor:'#FFF',
        height:290,
        width:180,
        elevation:7,
        borderRadius:10,
        marginRight:10,
        marginLeft:10,
        marginBottom:9,
        paddingHorizontal:10,
        borderWidth:0.3
    },
    plano:{
        textAlign:'center',
        fontSize:39,
        fontFamily:'Montserrat_600SemiBold',
        color:'#4f4a4a'
    },
    content:{
        
        // alignSelf:'center',
        flexDirection:'row',
        paddingTop: 20,
    },
    rs:{
        fontSize:23,
        fontFamily:'Montserrat_600SemiBold',
    },
    preco:{
        fontSize:50,
        fontFamily:'Montserrat_600SemiBold',
    },
    cent:{
        textAlignVertical:'bottom',
        fontFamily:'Montserrat_600SemiBold',
    },
    mes:{
        textAlignVertical:'bottom',
        fontFamily:'Montserrat_600SemiBold',
    },
    faixa:{
        flexDirection:'row',
        paddingTop:10,
        alignSelf:'center',        
    }

});
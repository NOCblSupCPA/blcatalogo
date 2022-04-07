import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView,TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Bloco from '../components/Bloco'; 

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
            <View style={styles.container}>
            <View style={styles.services}>
                <Text style={{fontFamily:'Montserrat_300Light',
                fontSize: 19,
                padding:10,
                }}>Serviços</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.linha}>
                <Bloco name= "LIKE FIBRA"
                description="" 
                onPress={() => 
                navigation.navigate('Internet')
                }
                />
                <Bloco name= "LIKE TV" 
                description="" 
                onPress={() =>
                navigation.navigate('Tv')
                }/>

                <Bloco name= "LIKE RÁDIO" 
                description="" 
                onPress={() => 
                navigation.navigate('Radio')
                }/>

                <Bloco name= "COMBO" 
                description="" 
                onPress={() => 
                navigation.navigate('Combo')
                }/>

                <Bloco name= "NOVIDADES EM BREVE..." 
                description="" 
                onPress={() => 
                navigation.navigate('News')
                }/>
            </View>
            
            </ScrollView>

            </View>

            <View style={styles.subtitle}>
                <Text style={styles.text}>Para sua casa</Text>
            </View> 
            

            <View style={{alignItems:'center', flex:2,}}>
            <View style={styles.header}>
            {/* <View style={styles.subtitle}>
                <Text style={styles.text}>Para sua casa</Text>
            </View>  */}
                <View>
                <Text style={styles.title}>header</Text> 
                <Text style={styles.descricao}>header</Text>
                </View>
            </View>
            </View>





            {/* <View style={styles.header2}>
                
            </View> */}

         

        </View>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#62AE47',
        height:'35%',
    },
    subtitle:{
        marginVertical:10
    },
    text:{
        marginLeft:4,
        paddingBottom:5,
        fontFamily:'Montserrat_300Light',
        fontSize:25,
    },
    header:{
        
        padding:15,
        height:260,
        width:370,
        backgroundColor:'#fff',
        borderRadius:5,
     },
    //  header2:{
    //     padding:15,
    //     height:260,
    //     width:370,
    //     backgroundColor:'#333',
    //     borderRadius:5,
    //  },
     title:{
        fontFamily:'Montserrat_300Light',
    },
    descricao:{
        fontFamily:'Montserrat_300Light',
    },
    linha:{
        flexDirection:'row',
    }





});
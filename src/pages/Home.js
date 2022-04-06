import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView,TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {useFonts} from 'expo-font';
import Bloco from '../components/Bloco'; 

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        
         <View style={styles.header}>
             <Image source={require('')}/>
         </View>

         <View style={styles.services}>
            <Text style={{fontFamily:'Montserrat_400Regular',
             fontSize: 25,
             marginLeft:10,
             }}>SERVIÇOS</Text>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View style={styles.linha}>
             <Bloco name= "INTERNET"
              description="" 
              onPress={() => 
              navigation.navigate('Internet')
             }/>
             <Bloco name= "TV" 
              description="" 
              onPress={() =>
              navigation.navigate('Tv')
             }/>

             <Bloco name= "COMBO" 
             description="" 
             onPress={() => 
             navigation.navigate('Combo')
             }/>
             <Bloco name= "NOVIDADES EM BREVE..." 
             description="" 
             onPress={() => 
             navigation.navigate('Combo')
             }/>
        </View>
        </ScrollView>
     </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#62AE47',
    },
    header:{
        marginTop:15,
        padding:10,
        height:270,
        backgroundColor:'#FFF',
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
     },
    linha:{
        flexDirection:'row',
    },

    services:{
        marginTop:10,
        paddingHorizontal:10,
    }


});
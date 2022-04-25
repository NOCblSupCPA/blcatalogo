import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function Montar() {
 return (
    
   <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
       <View style={styles.container}>
           <ScrollView showsVerticalScrollIndicator={false}>
               <Text style={{fontFamily:'Montserrat_400Regular',fontSize:20}}>Preencha as opções:</Text>
               <View style={styles.input}>
                   <TextInput placeholder="Quantidade de pessoas..." style={styles.textinput}/>
                   <TextInput placeholder="Quantidade de pessoas..." style={styles.textinput}/>
                   <TextInput placeholder="Quantidade de pessoas..." style={styles.textinput}/>
                   <TextInput placeholder="Quantidade de pessoas..." style={styles.textinput}/>
                   <TextInput placeholder="Quantidade de pessoas..." style={styles.textinput}/>

               </View>
           </ScrollView>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f5f5f5',
        width:'95%',
        height:'95%',
        borderRadius:10,
        elevation:10,
        padding:15,
    },
    input:{
        marginBottom:30,
        marginTop:40,
        width:'100%',
        height:'50%'
    },
    textinput:{
        color:'#000',
        fontFamily:'Montserrat_400Regular',
        fontSize:20,
    }
});
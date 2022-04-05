import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView,TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {useFonts} from 'expo-font';
import New from '../components/New'; 

export default function Home() {

    const navigation = useNavigation();

    return (
     <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#62AE47'}}>
         <View style={styles.header}>
            <View style={styles.teste}>
                <Feather />
            </View>
         </View>

         <View style={styles.linha}>
             <New name= "INTERNET"
              description="DESCRIÇÃO PLANO" 
              onPress={() => 
              navigation.navigate('Internet')
            }/>
             <New name= "TV" description="DESCRIÇÃO PLANO" onPress={() =>
                 navigation.navigate('Tv')
                 }/>
        </View>
        <View style={styles.linha2}>
             <New name= "COMBO" description="DESCRIÇÃO PLANO" onPress={() => 
                navigation.navigate('Combo')
                }/>
             <New name= "COMBO" description="DESCRIÇÃO PLANO" onPress={() => 
             navigation.navigate('Combo')
             }/>
         </View>
         
     </ScrollView>
  );
}
const styles = StyleSheet.create({
    linha:{
        flexDirection:'row',
    },
    linha2:{
        flexDirection:'row',
    }

});
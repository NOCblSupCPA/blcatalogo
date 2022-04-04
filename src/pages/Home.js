import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView,TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import New from '../components/New';

export default function Home() {
 return (
     <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#FFF'}}>
         <View style={styles.header}>
            <View style={styles.teste}>
                <Feather />
            </View>
         </View>

         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
             <New name= "INTERNET" description="DESCRIÇÃO PLANO" onPress={() => {}}/>
             <New name= "TV" description="DESCRIÇÃO PLANO" onPress={() => {}}/>
             <New name= "COMBO" description="DESCRIÇÃO PLANO" onPress={() => {}}/>

         </ScrollView>

     </ScrollView>
  );
}
const styles = StyleSheet.create({
    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
    },
    title:{
    }

});
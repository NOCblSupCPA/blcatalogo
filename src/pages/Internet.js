import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Internet() {
 return (
   <View style={styles.container}>
     <ImageBackground source={require('../assets/logo.png')} style={styles.image}/>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    image:{
      flex:1,
      justifyContent:'center',
    }
})
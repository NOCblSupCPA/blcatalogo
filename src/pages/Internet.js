import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Internet() {

  const img='../assets/bl02.png';

 return (
   <View style={styles.container}>
   <ImageBackground source={require(img)} style={styles.image}>
      <Text>teste</Text>
   </ImageBackground>
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image:{
    flex:1,
    resizeMode:"cover",
  }
})
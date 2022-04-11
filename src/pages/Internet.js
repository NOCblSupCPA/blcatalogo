import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fibra from '../components/Fibra';

export default function Internet() {

 return (
    <View style={styles.container}>
      <View style={{padding:15}}>
        <Text style={{fontFamily:'Montserrat_600SemiBold', fontSize:25,}}>PACOTES LIKE FIBRA</Text>
      </View>

      <View style={{justifyContent:'center', flexDirection:'row'}} >
        <Fibra 
        plano="160mb"
        rs="R$"
        preco="79"
        cent=",90"
        mes="/mês"
        />
        <Fibra name="2"
          plano="200mb"
          rs="R$"
          preco="89"
          cent=",90"
          mes="/mês"
        />
      </View>

      <View style={{justifyContent:'center', flexDirection:'row'}} >
        <Fibra name="3"
          plano="360mb"
          rs="R$"
          preco="99"
          cent=",90"
          mes="/mês"
          wifi="WI-FI "
          ultra="ULTRA"

        />
        <Fibra name="4"
          plano="500mb"
          rs="R$"
          preco="199"
          cent=",90"
          mes="/mês"
          wifi="WI-FI "
          ultra="ULTRA"
        />
      </View>

      <View style={{marginLeft:5}}>
        <Text style={{fontFamily:'Montserrat_100Thin',}}>*Os preços e condições apresentados nessa tabela podem sofrer alterações sem aviso prévio;</Text>
        <Text style={{fontFamily:'Montserrat_100Thin',}}>**Todas as vendas estão sujeitas a viabilidade técnica, análise e confirmação de dados.</Text>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
})
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

                {/* <Bloco name= "LIKE RÁDIO" 
                description="" 
                onPress={() => 
                navigation.navigate('Radio')
                }/> */}

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
            
            <View style={{alignItems:'center', }}>
            <View style={styles.header}>
            <Image source={require('../assets/360MB1024.png')} style={{resizeMode:'contain',
              width:370,
              height:342,
              borderRadius:5,
              }} />
                {/* <View style={styles.descricao}>
                <Text style={styles.title}>360</Text> 
                <Text style={styles.mega}>MEGA</Text>
                <Feather name="wifi" size={24} color='#62AE47'/>
                </View> */}

                {/* <View style={styles.wifi}>
                <Text style={styles.texto}>WIFI ULTRA</Text>
                </View> */}

                {/* <View style={styles.preco}>
                    <Text style={styles.price}>R$</Text>
                    <Text style={styles.valor}>99,90</Text>
                    <Text style={styles.mes}>/MÊS</Text>
                </View> */}
                
                {/* <View>
                    <Text>APPS INCLUSOS</Text>
                    <Text>a</Text>
                    <Text>a</Text>
                </View> */}
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
        marginVertical:5
    },
    text:{
        marginLeft:22,
        fontFamily:'Montserrat_300Light',
        fontSize:25,
    },
    // header:{
    //     height:350,
    //     width:370,
    //     backgroundColor:'#eca635',
    //     borderRadius:8,
    //  },
    //  header2:{
    //     padding:15,
    //     height:260,
    //     width:370,
    //     backgroundColor:'#333',
    //     borderRadius:5,
    //  },
    descricao:{
        paddingLeft:30,
        flexDirection:'row',
        backgroundColor: '#fff',
        width:'70%',
        borderRadius:9,
        elevation:3,        
    },
    title:{
        fontFamily:'Inter_900Black',
        fontSize:50,
        color:'#62AE47'
    },
    mega:{
        color:'#62AE47',
        fontFamily:'Inter_900Black',
        fontSize:16,
        marginBottom:15,
        alignSelf:'flex-end',
        marginLeft:10
    },
    linha:{
        flexDirection:'row',
    },
    wifi:{
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
    },
    texto:{
        fontFamily:'Montserrat_500Medium',
        fontSize:30,
        color:'#fff',
    },
    preco:{
        
        alignSelf:'auto',
        flexDirection:'row',
        backgroundColor:'#eca635',
        justifyContent:'center',
        height:80,
        width:250,
        alignItems:'center',
    },
    price:{
        color:'#333',
        fontSize:20,
        marginRight:5,
        fontFamily:'Montserrat_800ExtraBold',

    },
    valor:{
        color:'#333',
        fontSize:50,
        fontFamily:'Montserrat_800ExtraBold',
    },
    mes:{
        color:'#333',
        fontSize:15,
        fontFamily:'Montserrat_800ExtraBold',
        alignSelf:'flex-end',
    },
    

});
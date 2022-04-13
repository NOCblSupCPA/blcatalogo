import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView,TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Bloco from '../components/Bloco'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function Home() {

    const navigation = useNavigation();
    return (
        <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
            <View style={styles.container}>
                <View style={styles.services}>
                    <Text style={{fontFamily:'Montserrat_400Regular',
                    fontSize: 19,
                    padding:10,
                    }}>Serviços</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row'}}>
                    <Bloco name= "LIKE FIBRA"
                    description="• Instalação Gratuita" 
                    description1="• Wi-Fi Ultra"
                    description2="• APP - Paramount +"
                    description3 ="• APP - Noggin"
                    onPress={() => 
                    navigation.navigate('Internet')
                    }
                    />
                    <Bloco name= "LIKE TV" 
                    description="• LIGHT TV"
                    description1="• LIKE BASIC"
                    description2="• LIKE PLUS"
                    description3="• LIKE TOTAL"
                    onPress={() =>
                    navigation.navigate('Tv')
                    }/>
                    <Bloco name= "COMBO" 
                    description="•LIGHT"
                    description1="•LIFE"
                    description2="•ULTRA"
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
                <View style={{flex:2}}>
                    <View style={{alignItems:'center', }}>
                        <View style={styles.header}>
                            <Image source={require('../assets/360MB1024.png')} style={{resizeMode:'contain',
                            width:370,
                            height:342,
                            borderRadius:9,
                            }} />
                        </View>
                    </View>
                    <View style={{flex:1}}>             
                        <View style={{paddingTop:20}}>
                                <Text style={{fontFamily:'Montserrat_400Regular',
                                fontSize:15,
                                marginLeft:10}}>NOSSOS APPS</Text>
                        </View>
                        <View style={styles.imgs}>
                                <Image source={require('../assets/nogginbl.png')} style={{resizeMode:'contain',
                            width:140,
                            height:60,
                            marginHorizontal:15}}/>

                            <TouchableOpacity>
                                <Image source={require('../assets/paramount1.png')} style={{resizeMode:'contain',
                            width:140,
                            height:60,
                            marginHorizontal:15}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#62AE47',
        height:'35%',
    },
    subtitle:{
        marginVertical:2
    },
    text:{
        marginLeft:10,
        fontFamily:'Montserrat_400Regular',
        fontSize:25,
    },
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
    imgs:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        flex:1,
        flexDirection:'row',
        borderRadius:5,
    }
});
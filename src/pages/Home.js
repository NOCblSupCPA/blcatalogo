import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { ScrollView,TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Bloco from '../components/Bloco'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key:'1',
        image: require('../assets/360MB1024.png')
    },
    {
        key:'2',
        image:require('../assets/bl02.png')
    },
    {
        key:'3',
        image:require('../assets/grupobl.png')
    }
]

export default function Home() {

    function render({item}){
        return (
            <View style={{flex:1}}>
                <Image
                source={item.image}
                style={{ resizeMode:'cover',
                         width: '100%',
                         height: '100%',
                    }}
                />
                
            </View>
          );
    }
    const [showHome, setShowHome] = useState(false);
    const navigation = useNavigation();
    if(showHome){
        return <Text>Entrou na home</Text>
    }
    else{
        return (
            <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
                <View style={styles.container}>
                    <View style={styles.services}>
                        <Text style={{fontFamily:'Montserrat_400Regular',
                        fontSize: 19,
                        paddingTop:5,
                        marginLeft:10,
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

                <View style={{marginTop:10, width:'100%', height:'55%'}}>  
                <Text style={{fontFamily:'Montserrat_400Regular', marginBottom:5, fontSize:20}}>PARA SUA CASA</Text>         
                <AppIntroSlider
                renderItem={render}
                data={slides}
                activeDotStyle={{
                    backgroundColor:'#fff',
                    width:20,
                }}
                showDoneButton={false}
                showNextButton={false}
                />
                </View>
            </View>
        );
    }
    }

const styles = StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor:'#62AE47',
        height:'35%',
    },
    subtitle:{ 
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
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        flexDirection:'row',
        borderRadius:5,
    }
});
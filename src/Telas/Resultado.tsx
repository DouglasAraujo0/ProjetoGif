import axios from "axios";
import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from 'react-native-vector-icons';

export default ({route, navigation})=>{

    const [text,setText]=useState('')

    const escolha = route.params.escolha;
    const link = `api.giphy.com/v1/${escolha}/search`; 
    console.log(link);

    const solicitar = async (text)=>{
        try {
            const resultados = await axios.get(link,{
                params:{
                    api_key: "YRtBUPTWGmA2c9vYRtaMriXXXquvyzTP",
                    q: text,
                    lang: 'pt'
                }
            }) 
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ImageBackground source={require('../../assets/BG.png')} style = {estilo.container}>
            <SafeAreaView>
                <View style={estilo.cabecalho}>
                    <Ionicons name='chevron-back' size={40} color='white' onPress={()=>navigation.goBack()} />
                        <TextInput 
                        placeholder="Pesquisar" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        value={text} 
                        onChangeText={(value)=>setText(value)} 
                        style={estilo.input}
                    />
                    <Ionicons 
                        name='search' 
                        size={40} 
                        color='white'
                        onPress={solicitar(text)}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1
    },
    cabecalho:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    input:{
        backgroundColor: 'white',
        flex:1,
        borderRadius: 25,
        paddingLeft: 15,
    }
})
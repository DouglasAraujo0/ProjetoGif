import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet} from "react-native";



export default ({navigation})=>{
    return(
        <ImageBackground source= {require('../../assets/HomePage.png')} style={styles.container}>

            <Text style={styles.mainText}>
                Pesquisar por: 
            </Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('TelaResultado', {escolha:'gifs'})}>
                    <Text style={styles.textBtn}>Gifs</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('TelaResultado', {escolha:'stickers'})}>
                    <Text>Stickers</Text>
                </TouchableOpacity>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    row:{
        flexDirection: 'row',
    },
    button:{
        width: 100,
        height: 50,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
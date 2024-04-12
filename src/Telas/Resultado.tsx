import React from "react";
import { View, Text} from "react-native";

export default ({route})=>{

    const escolha = route.params.escolha;
    const link = `api.giphy.com/v1/${escolha}/search`; 
    console.log(link);

    return(
        <View>
            <Text>
                TELA RESULTADO
            </Text>
        </View>
    )
}
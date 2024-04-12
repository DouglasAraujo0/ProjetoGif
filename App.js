import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import TelaInicial from "./src/Telas/TelaInicial";
import Detalhes from "./src/Telas/Detalhes";
import Resultado from "./src/Telas/Resultado";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown:false}}/>
        <Stack.Screen name="TelaDetalhes" component={Detalhes} />
        <Stack.Screen name="TelaResultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
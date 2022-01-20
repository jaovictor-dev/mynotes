import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyNotes from "./src/pages/MyNotes";
import NovaNota from "./src/pages/NovaNota"
import EditarNota from "./src/pages/EditarNota";
import Detalhes from "./src/pages/Detalhes";
import Login from "./src/pages/Login";
import NovoUsuario from "./src/pages/NovoUsuario";

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
          }}
        />
        <Stack.Screen
            name="NovoUsuario"
            component={NovoUsuario}
            options={{
              headerShown: false
          }}
        />
        <Stack.Screen
            name="MyNotes"
            component={MyNotes}
            options={{ 
              headerLeft: null,
              headerStyle: {
                backgroundColor: "#232323",
              },
              headerTintColor:"#ffffff"
          }}
        />
        <Stack.Screen
            name="Nova Nota"
            component={NovaNota}
            options={{
              headerStyle: {
                backgroundColor: "#232323",
              },
              headerTintColor:"#ffffff"
          }}
        />
        <Stack.Screen
            name="Editar Nota"
            component={EditarNota}
            options={{
              headerStyle: {
                backgroundColor: "#232323",
              },
              headerTintColor:"#ffffff"
          }}
        />
        <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={{
              headerStyle: {
                backgroundColor: "#232323",
              },
              headerTintColor:"#ffffff"
              
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
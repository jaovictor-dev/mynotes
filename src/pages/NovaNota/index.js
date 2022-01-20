import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import firebase from "../../config/firebaseconfig";
import styles from "./style";


export default function NovaNota( { navigation, route } ){
    const [titulo, setTitulo] = useState(null);
    const [descrisao, setDescrisao] = useState(null);
    const database = firebase.firestore();

    function addNota(){
        database.collection(route.params.idUser).add({
          titulo: titulo,
          descrisao: descrisao,
          status: false
        })
        navigation.navigate("MyNotes", {idUser: route.params.idUser});
      }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Harry Potter..."
                onChangeText={setTitulo}
                value={titulo}
            />
            <Text style={styles.label}>Descrisão</Text>
            <TextInput
                multiline="true"
                style={styles.inputDescrisao}
                placeholder="Ex: Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie ..."
                onChangeText={setDescrisao}
                value={descrisao}
            />
            <TouchableOpacity
                style={styles.buttonNovaNota}
                onPress={()=> {
                    addNota()
                }}
            >
                <Text style={styles.iconButton}>✔</Text>
            </TouchableOpacity>
        </View>
    )
}

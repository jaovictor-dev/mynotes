import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity}  from "react-native";
 
import firebase from "../../config/firebaseconfig";
import styles from "./style";


export default function EditarNota({ navigation, route }){
    const [tituloEdit, setTituloEdit] = useState(route.params.titulo);
    const [descrisaoEdit, setDescrisaoEdit] = useState(route.params.descrisao);
    const idMyNotes = route.params.id;
    const database = firebase.firestore();

    function editNota(titulo, descrisao, id){
        database.collection(route.params.idUser).doc(id).update({
          titulo: titulo,
          descrisao: descrisao
        })
        navigation.navigate("MyNotes", {idUser: route.params.idUser})
      }


    return(
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTituloEdit}
                value={tituloEdit}
            />
            <Text style={styles.label}>Descrisão</Text>
            <TextInput
                multiline="true"
                style={styles.inputDescrisao}
                onChangeText={setDescrisaoEdit}
                value={descrisaoEdit}
            />
            <TouchableOpacity
                style={styles.buttonEditarNota}
                onPress={()=> {
                    editNota(tituloEdit, descrisaoEdit, idMyNotes)
                }}
            >
                <Text style={styles.iconButton}>✔</Text>
            </TouchableOpacity>
        </View>
    )
}

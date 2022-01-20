import React, { useState } from "react";
import {View, Text, ScrollView}  from "react-native";
 
import firebase from "../../config/firebaseconfig";
import styles from "./style";


export default function EditarNota({ navigation, route }){
    const titulo = useState(route.params.titulo);
    const descrisao = useState(route.params.descrisao);

    return(
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.label}>Título</Text>
                <Text
                    style={styles.titulo}
                >
                    {titulo}
                </Text>
                <Text style={styles.label}>Descrisão</Text>
                <Text
                    style={styles.descrisao}
                >
                    {descrisao}
                </Text>
            </View>
        </ScrollView>
    )
}

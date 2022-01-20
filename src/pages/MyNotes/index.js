import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import firebase from "../../config/firebaseconfig";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function MyNotes({ navigation, route }){
    const [mynotes, setMyNotes] = useState([]);
    const database = firebase.firestore();

    function logout(){
          const auth = getAuth();
            signOut(auth).then(() => {
                navigation.navigate("Login")
            }).catch((error) => {

            });
    }

    function deleteNota(id){
        database.collection(route.params.idUser).doc(id).delete();
    }

    useEffect (()=>{
        database.collection(route.params.idUser).onSnapshot((query)=>{
            const list = [];
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id});
            })
            setMyNotes(list);
        });
    }, []);

    return(
        <View style={styles.container}>
            <FlatList     
                showsVerticalScrollIndicator={false}
                data={mynotes}
                renderItem={( { item } ) => {
                    return(
                        <View style={styles.Notas}>
                            <TouchableOpacity 
                                style={styles.deleteNota}
                                onPress={()=> {
                                    deleteNota(item.id)
                                }}    
                            >
                                <FontAwesome
                                    name="trash-o"
                                    size={23}
                                    color="#4bbb95"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.balaoNota}
                                onPress={()=>{
                                    navigation.navigate("Detalhes",{
                                        id: item.id,
                                        titulo: item.titulo,
                                        descrisao: item.descrisao,
                                        idUser: route.params.idUser
                                    })
                                }}
                            >
                                <Text  style={styles.tituloNota}>
                                    {item.titulo}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.editNota}
                                onPress={()=>{
                                    navigation.navigate("Editar Nota",{
                                        id: item.id,
                                        titulo: item.titulo,
                                        descrisao: item.descrisao,
                                        idUser: route.params.idUser
                                    })
                                }}
                            >
                                <FontAwesome
                                    name="pencil"
                                    size={23}
                                    color="#4bbb95"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                        </View>
                    )    
                }}
            />
            
            <TouchableOpacity
                style={styles.buttonLogout}
                onPress={()=> { logout()}}
            >
                <Text style={styles.iconButtonLogout}>
                    <FontAwesome
                        name="sign-out"
                        size={23}
                        color="#4bbb95"  
                        style={{transform: [{rotateY: '180deg'}],position: 'absolute',left:0}}
                    />
                </Text>
            </TouchableOpacity>
           
            <TouchableOpacity 
                style={styles.buttonNovaNota}
                onPress={() => {
                    navigation.navigate("Nova Nota", {
                        idUser: route.params.idUser
                    });
                  }}          
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

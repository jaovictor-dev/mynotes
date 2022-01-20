import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login( { navigation } ){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginfirebase = ()=>{

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user; 
            navigation.navigate("MyNotes", { idUser: user.uid })
        })
        .catch((error) => {
            setErrorLogin(true)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            navigation.navigate("MyNotes", { idUser: user.uid })
          } 
        });
    }, []);

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>MyNotes</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite seu senha"
                type="text"
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />
            {errorLogin === true
            ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#4bbb95"
                    />
                    <Text style={styles.warningAlert}>E-mail ou senha inválidos</Text>
                </View>
            :
                <View/>
            }

            {email === "" || senha === ""
            ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonLogin}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={loginfirebase}
            >
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            }
            <Text style={styles.registrar}>
                Não tem uma conta?⠀
                <Text
                    style={styles.linkCadastro}
                    onPress={()=> navigation.navigate("NovoUsuario")}
                >
                    Inscreva-se
                </Text>
            </Text>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}
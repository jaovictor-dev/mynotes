import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NovoUsuario( { navigation } ){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorRegistro, setErrorRegistro] = useState("");

    const registro = ()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("MyNotes", { idUser: user.uid })
        })
        .catch((error) => {
            setErrorRegistro(true)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Cadastro</Text>
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
            {errorRegistro === true
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
                    style={styles.buttonCadastro}
                >
                    <Text style={styles.textButtonCadastro}>Cadastrar</Text>
                </TouchableOpacity>
            :
            <TouchableOpacity
                style={styles.buttonCadastro}
                onPress={registro}
            >
                <Text style={styles.textButtonCadastro}>Cadastrar</Text>
            </TouchableOpacity>
            }
            <Text style={styles.login}>
                Já tem uma conta?⠀
                <Text
                    style={styles.linkLogin}
                    onPress={()=> navigation.navigate("Login")}
                >
                    Entrar
                </Text>
            </Text>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}
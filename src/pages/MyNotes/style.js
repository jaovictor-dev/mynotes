import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1c1c1c",
        paddingTop: 20
    },
    Notas:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    deleteNota:{
        justifyContent: "center",
        paddingLeft: 15,
        paddingRight: 15
    },    
    editNota:{
        justifyContent: "center",
        paddingRight: 15
    },
    balaoNota:{
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#262626",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 5,
        marginRight: 15,
    },
    tituloNota:{
        color: "#ffffff"
    },
    buttonLogout:{
        width: 50,
        height: 50,
        position: "absolute",
        bottom: 30,
        left: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButtonLogout:{
        color: "#1c1c1c",
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonNovaNota:{
        width: 50,
        height: 50,
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#4bbb95",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton:{
        marginBottom: 5,
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
    },
});

export default styles
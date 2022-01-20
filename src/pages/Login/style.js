import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1c1c1c",
        paddingTop: Platform.OS === "ios"? 0 : 50,
        alignItems:"center",
        alignContent:"center"
    },
    title:{
        fontSize:30,
        color:"#4bbb95",
        marginBottom:10,
        fontWeight:"bold"
    },
    input:{
        width:300,
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#4bbb95",
        marginLeft:"auto",
        marginRight:"auto",
        color:"#ffffff"
    },
    buttonLogin:{
        width:200,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#4bbb95",
        borderRadius:30,
        marginTop:50
    },
    textButtonLogin:{
        color:"#ffffff"
    },
    contentAlert:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    warningAlert:{
        paddingLeft:10,
        color:"#bdbdbd",
        fontSize:16
    },
    registrar:{
        marginTop:20,
        color:"#4bbb95"
    },
    linkCadastro:{
        color:"#1877f2",
        fontSize:16
    }
});

export default styles
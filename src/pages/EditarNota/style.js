import { StyleSheet } from "react-native"
 
const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:"#1c1c1c"
    },
    label:{
        width:"90%",
        marginTop: 20,
        fontSize:16,
        marginLeft: 20,
        color:"#4bbb95"
    },
    input:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth: 1,
        borderBottomColor:"#ffffff",
        color:"#ffffff",
        marginLeft:"auto",
        marginRight:"auto"
    },
    inputDescrisao:{
        width:"90%",
        height: 120,
        marginTop:10,
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor:"#ffffff",
        color:"#ffffff",
        marginLeft:"auto",
        marginRight:"auto"
    },
    buttonEditarNota:{
        width:50,
        height:50,
        position:"absolute",
        bottom: 30,
        right:20,
        backgroundColor:"#4bbb95",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold",
    }
 
});

export default styles
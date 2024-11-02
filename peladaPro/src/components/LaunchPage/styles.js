import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView:{
        width: '100%',
        height: '100%',
        backgroundColor: "#96B598"
    },
    logoView: {
        alignItems: 'center'
    },
    logo: {
        width: '90%',
        height: '60%',
        margin: 'auto'
    },
    viewBotoes: {
        width: '100%',
        marginTop: 180,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    botao: {
        backgroundColor: '#313B31',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    textBotao: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles
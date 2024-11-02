import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        width: '100%',
        backgroundColor: '#96B598',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formStyle: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        margin: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 30,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    botao: {
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#313B31',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 30
    },
    textBotao: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    register: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 90
    }
})

export default styles
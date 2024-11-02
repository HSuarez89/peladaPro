import React from "react"
import { View, Text, TextInput, TouchableOpacity, Keyboard, Pressable } from "react-native"
import styles from "./styles"

const LogInPage = ({goBack}) => {

    return(
        <View style={styles.viewStyle}>
            <Pressable style={styles.formStyle} onPress={Keyboard.dismiss}>
                <Text style={styles.login}>Login</Text>
                <TextInput placeholder="E-mail" style={styles.input}/>
                <TextInput placeholder="Senha" style={styles.input}/>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBotao}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goBack} style={styles.botao}>
                    <Text style={styles.textBotao}>Voltar</Text>
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}
export default LogInPage
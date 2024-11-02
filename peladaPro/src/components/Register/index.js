import React from "react"
import { View, Text, TextInput, TouchableOpacity, Keyboard, Pressable } from "react-native"
import styles from "./styles"


const Register = ({goBack}) => {


    return(
        <View style={styles.viewStyle}>
            <Pressable onPress={Keyboard.dismiss} style={styles.formStyle}>
                <Text style={styles.register}>Cadastro</Text>
                <TextInput placeholder="Nome" style={styles.input}/>
                <TextInput placeholder="E-mail" style={styles.input}/>
                <TextInput placeholder="Telefone" style={styles.input}/>
                <TextInput placeholder="Senha" style={styles.input}/>
                <TextInput placeholder="Confirmar Senha" style={styles.input}/>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBotao}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goBack} style={styles.botao}>
                    <Text style={styles.textBotao}>Voltar</Text>
                </TouchableOpacity>
            </Pressable>
        </View>
    )
}
export default Register
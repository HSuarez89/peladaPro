import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Keyboard, Pressable, Alert } from "react-native"
import styles from "./styles"
import { supabase } from "../../services/supabase";

const LogInPage = ({goBack}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignIn() {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if(error){
            console.error(error)
            return
        }else{
            console.log("Login Realizado com sucesso")
        }
        Alert.alert("Login realizado com sucesso")
    }

    return(
        <View style={styles.viewStyle}>
            <Pressable style={styles.formStyle} onPress={Keyboard.dismiss}>
                <Text style={styles.login}>Login</Text>
                <TextInput placeholder="E-mail" style={styles.input} onChangeText={setEmail} value={email}/>
                <TextInput placeholder="Senha" style={styles.input} onChangeText={setPassword} value={password} secureTextEntry/>
                <TouchableOpacity style={styles.botao} onPress={handleSignIn}>
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
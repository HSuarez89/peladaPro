import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Keyboard, Pressable, Alert } from "react-native"
import styles from "./styles"
import { supabase } from "../../services/supabase"


const Register = ({goBack}) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha1, setSenha1] = useState('')
    const [senha2, setSenha2] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSignUp() {
        if(nome, email, telefone, senha1, senha2){
            if(senha1 === senha2){
                setSenha(senha1)
                limparSenha()
            }else {
                Alert.alert("As senhas digitadas são diferentes")
            }
            function limparSenha(){
                setSenha1('')
                setSenha2('')
            }
            const {
                data: { session },
                error,
            } = await supabase.auth.signUp({ email, senha })

            if(error){
                console.error(error)
            }

            if (!session){
                Alert.alert('Por favor, verifique seu e-mail cadastrado para continuar')
            }
        } else{
            Alert.alert('Todos os campos são obrigatórios')
        }
    }

    return(
        <View style={styles.viewStyle}>
            <Pressable onPress={Keyboard.dismiss} style={styles.formStyle}>
                <Text style={styles.register}>Cadastro</Text>
                <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} value={nome}/>
                <TextInput placeholder="E-mail" style={styles.input} onChange={setEmail} value={email}/>
                <TextInput placeholder="Telefone" style={styles.input} onChange={setTelefone} value={telefone}/>
                <TextInput placeholder="Senha" style={styles.input} onChange={setSenha1} value={senha1}/>
                <TextInput placeholder="Confirmar Senha" style={styles.input} onChange={setSenha2} value={senha2}/>
                <TouchableOpacity style={styles.botao} onPress={handleSignUp}>
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
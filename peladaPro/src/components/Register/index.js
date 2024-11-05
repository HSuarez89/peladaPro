import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Pressable, Alert } from "react-native";
import styles from "./styles";
import { supabase } from "../../services/supabase";

const Register = ({ goBack, navigateToLogin }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignUp() {
        if (nome && email && telefone && password) {
            const { user, error } = await supabase.auth.signUp({ email, password });

            if (error) {
                console.error(error);
                Alert.alert("Erro no cadastro", error.message);
            } else {
                // Se o cadastro foi bem-sucedido e não há erro
                Alert.alert(
                    'Cadastro realizado com sucesso!',
                    'Por favor, verifique seu e-mail cadastrado para continuar.',
                    [
                        { text: "OK", onPress: () => navigateToLogin() } // Agora deve funcionar
                    ]
                );
            }
        } else {
            Alert.alert('Todos os campos são obrigatórios');
        }
    }

    return (
        <View style={styles.viewStyle}>
            <Pressable onPress={Keyboard.dismiss} style={styles.formStyle}>
                <Text style={styles.register}>Cadastro</Text>
                <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} value={nome} />
                <TextInput placeholder="E-mail" style={styles.input} onChangeText={setEmail} value={email} keyboardType="email-address" />
                <TextInput placeholder="Telefone" style={styles.input} onChangeText={setTelefone} value={telefone} keyboardType="phone-pad" />
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry onChangeText={setPassword} value={password} />
                <TouchableOpacity style={styles.botao} onPress={handleSignUp}>
                    <Text style={styles.textBotao}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goBack} style={styles.botao}>
                    <Text style={styles.textBotao}>Voltar</Text>
                </TouchableOpacity>
            </Pressable>
        </View>
    );
};

export default Register;
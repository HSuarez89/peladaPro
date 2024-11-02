import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles'
import LogInPage from "../LogInPage";
import Register from '../Register'

const LaunchPage = () => {
    const [currentScreen, setCurrentScreen] = useState(null)

    const navigateLogIn = () => {
        setCurrentScreen('LogInPage')
    }

    const navigateRegisterPage = () => {
        setCurrentScreen('RegisterPage')
    }

    const goBack = () => {
        setCurrentScreen(null)
    }

    if(currentScreen === 'LogInPage'){
        return <LogInPage goBack={goBack}/>
    }else if(currentScreen === 'RegisterPage'){
        return <Register goBack={goBack}/>
    }

    return(
        <View style={styles.mainView}>
            <View style={styles.logoView}>
                <Image source={require('../../img/logoapp.png')} style={styles.logo}/>
            </View>
            <View style={styles.viewBotoes}>
                <TouchableOpacity style={styles.botao} onPress={navigateLogIn}>
                    <Text style={styles.textBotao}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={navigateRegisterPage}>
                    <Text style={styles.textBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

    export default LaunchPage
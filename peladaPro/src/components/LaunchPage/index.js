import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function launchPage(){
    return(
        <View>
            <Image source={require('../../img/logoapp.png')}/>
        </View>
    )
}
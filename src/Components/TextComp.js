import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const TextComp = (props) => (
    <View>
        <Text style={props.style}>{props.text}</Text>
    </View>
);

const styles=StyleSheet.create({
 
})

export default TextComp;

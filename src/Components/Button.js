import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const { width, height } = Dimensions.get('window');


const Button = (props) => (

    <TouchableOpacity style={styles.viewStyle}>
        <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>

);

const styles=StyleSheet.create({
    buttonText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:RFValue(14, 580)
    },
    viewStyle:{
        backgroundColor:'red',
        width:width*0.9,
        height:height*0.08,
        marginLeft: width * 0.05,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    }
})

export default Button;

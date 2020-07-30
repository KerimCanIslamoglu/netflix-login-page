import React from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const Input = (props) => (
    <View>
        <TextInput
            placeholder={props.placeholder}
            style={styles.textInput}
            placeholderTextColor={props.placeholderTextColor}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            selectionColor={props.selectionColor}

        />
    </View>
);
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#3d3c3c',
        height: height * 0.08,
        width: width * 0.9,
        marginLeft: width * 0.05,
        paddingLeft:width*0.04,
        borderRadius:5,
        marginVertical:height*0.01,
        color:'#fff'
    }
})
export default Input;

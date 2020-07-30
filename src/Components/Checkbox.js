import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const CheckBox = (props) => (
    <View style={styles.outerCheckView}>
        {
          props.isChecked && <View style={styles.innerCheckView} >
                <Image style={styles.innerCheckImage} source={require('../../assets/check.png')} />
            </View>
        }


    </View>
);

const styles = StyleSheet.create({
    outerCheckView: {
        borderWidth: 1,
        backgroundColor: '#3d3c3c',
        width: 20,
        height: 20,
        marginLeft: width * 0.05,
        borderRadius: 5
    },
    innerCheckImage: {
        width: 18,
        height: 18,
    },
    innerCheckView: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CheckBox;

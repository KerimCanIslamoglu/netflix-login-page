import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Input from './src/Components/Input.js'
import Button from './src/Components/Button.js'
import Checkbox from './src/Components/Checkbox.js'
import TextComp from './src/Components/TextComp.js'


const { width, height } = Dimensions.get('window');

export default class App extends Component {

  state = {
    username: '',
    password: '',
    isShowPassword: false,
    isChecked: true
  }
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.logoView}>
            <Image style={styles.netflixLogo} source={require('./assets/netflix-logo.png')} />
          </View>
          <View style={styles.formView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.signInText}>Sign In</Text>
              <Input placeholder={'Email or phone number'}
                placeholderTextColor={'#ECECEC'}
                keyboardType={'email-address'}
                secureTextEntry={false}
                selectionColor={'#ffff'}
              />
              <Input placeholder={'Password'}
                placeholderTextColor={'#ECECEC'}
                keyboardType={'default'}
                secureTextEntry={true}
                selectionColor={'#ffff'}
              />
              <View style={styles.signInButtonView}>
                <Button text={'Sign In'}></Button>
              </View>

              <View style={styles.rememberHelpView}  >
                <TouchableOpacity style={styles.checkTextView} onPress={() => this.setState({ isChecked: !this.state.isChecked })}
                >
                  <Checkbox isChecked={this.state.isChecked} />
                  <View style={styles.rememberMeTextView}>
                    <TextComp
                      style={{
                        fontSize: 14,
                        color: '#565656'
                      }} text={'Remember me'}></TextComp>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.helpTextView}>
                  <TextComp style={{
                    fontSize: 14,
                    color: '#565656'

                  }} text={'Need help?'}></TextComp>
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={{ marginTop: height * 0.15 }}>
              <TouchableOpacity style={styles.loginWithFacebookView}>
                <Image style={styles.facebookLogo} source={require('./assets/facebook.png')} />
                <View style={{ justifyContent: 'center' }}>
                  <TextComp
                    style={{
                      fontsize: 14,
                      color: '#565656',
                      marginLeft: width * 0.02,
                    }} text={'Login with Facebook'}></TextComp>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.newToNetflixView} >
                <TextComp style={{
                  fontSize: 16,
                  color: '#565656'

                }} text={'New to Netflix?'}></TextComp>
                <TextComp style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold'
                }} text={' Sign up now.'}></TextComp>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {

  },
  safeAreaView: {
    backgroundColor: 'black',
    flex: 1
  },
  logoView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  formView: {
    flex: 2,
    marginTop: height * 0.05
  },
  bottomView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  netflixLogo: {
    height: height * 0.15,
    width: width * 0.4,
    marginLeft: width * 0.05,
    marginTop: height * 0.05
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(28, 580),
    marginLeft: width * 0.05,
    marginBottom: height * 0.03

  },
  signInButtonView: {
    marginTop: height * 0.05
  },
  rememberHelpView: {
    marginTop: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkTextView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  helpTextView: {
    marginRight: width * 0.05,
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  rememberMeTextView: {
    marginLeft: width * 0.01,
    justifyContent: 'center'
  },
  newToNetflixView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.05,
    marginTop: height * 0.03
  },
  loginWithFacebookView: {
    flexDirection: 'row',
    marginLeft: width * 0.05,
  },
  facebookLogo: {
    height: 20,
    width: 20
  }

});

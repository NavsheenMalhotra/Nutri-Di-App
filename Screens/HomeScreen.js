import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../Config.js'
import firebase from 'firebase'

export default class HomeScreen extends React.Component{
  goToSignUp=()=>{
  this.props.navigation.navigate('GetStarted')
}
goToSignIn=()=>{
  this.props.navigation.navigate('SignIn')
}


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.25 }}>
          <View style={{ flex: 0.15 }} />
          <View style={styles.santaView}>
          </View>
        </View>
        <ImageBackground
        source={require('../assets/homePageImage.jpg')}
        style={{width: RFValue(320), height: RFValue(700)}}
        >
        <TouchableOpacity
              style={styles.button}
              onPress={() => this.goToSignUp()}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
            Already Have An Account?
            </Text>
        <TouchableOpacity
              style={styles.buttonSign}
              onPress={() => {
                this.goToSignIn()
              }}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            
        <View style={{ flex: 0.3 }}>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    marginTop: RFValue(320),
    marginLeft: RFValue(30),
    width: '80%',
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#FFFF33',
    shadowColor: '#000',
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonSign:{
    marginTop: RFValue(15),
    marginLeft:RFValue(30),
    width: '80%',
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#FFFF33',
    shadowColor: '#000',
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  santaView: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  text:{
    fontWeight: 'bold',
    fontSize: RFValue(20),
    marginTop: RFValue(30),
  }
});
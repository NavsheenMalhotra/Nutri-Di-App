import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';


export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: false,
      currencyCode: '',
    };
  }
  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate('HealthData');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
        <ImageBackground
        source={require('../assets/f.jpg')}
        style={{width: RFValue(320), height: RFValue(660)}}
        >
          <View
            style={{ justifyContent: 'center', alignItems: 'center' }}></View>
          <View>
            <Text style={styles.title}>Login In Page!</Text>
          </View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@gmail.com"
            keyboardType="email-address"
            onChangeText={(a) => {
              this.setState({
                emailId: a,
              });
            }}
          />
          <TextInput
            style={styles.loginBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(a) => {
              this.setState({
                password: a,
              });
            }}
          />
          <TouchableOpacity
            style={[
              styles.button,
              { marginBottom: RFValue(20), marginTop: RFValue(30) },
            ]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password)
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  title: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(30),
    color: 'black',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: RFValue(10),
    marginTop:RFValue(180)
  },
  loginBox: {
    width: RFValue(260),
    height: RFValue(40),
    borderBottomWidth: RFValue(1.5),
    borderColor: 'black',
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
    marginTop: RFValue(20),
    color: 'black',
    marginLeft: RFValue(40)
  },
  button: {
    width: RFValue(220),
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#FFFF66',
    shadowColor: '#000',
    shadowOffset: { width: RFValue(0), height: RFValue(8) },
    shadowOpacity: RFValue(0.3),
    shadowRadius: RFValue(10.32),
    elevation: RFValue(16),
    marginLeft: RFValue(90),
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(30),
    fontFamily: 'HarlowSolidItalic',
  },
});

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
  Image,
  ImageBackground
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from "react-native-responsive-fontsize";
import {HealthData} from './HealthData'


export default class GetStarted extends Component {
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
      currencyCode:""
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert("Password Doesn't Match!\nCheck Your Password!!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
            isItemRequestActive: false,
          });
          return alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };
  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={'First Name'}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Last Name'}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Contact'}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Address'}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Email'}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword,
                      this.goToHomePage()
                    )
                  }>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}>
                  <Text style={{ color: 'black' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };
  goToHomePage=()=>{
    this.props.navigation.navigate('HealthData')
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
       
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {this.showModal()}
          </View>

        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: RFValue(30),
    color: 'black',
    margin: RFValue(60),
    fontWeight: '500',
    fontFamily: 'HarlowSolidItalic',
  },
  modalContainer: {
    flex: 1,
    borderRadius: RFValue(20),
    borderColor: 'black',
    borderWidth: RFValue(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5FFCC',
    marginRight: RFValue(30),
    marginLeft: RFValue(30),
    marginTop: RFValue(30),
    marginBottom: RFValue(30),
  },
  formTextInput: {
    width: '75%',
    height: RFValue(35),
    alignSelf: 'center',
    borderColor: 'black',
    borderRadius: RFValue(10),
    borderWidth: RFValue(1),
    marginTop: RFValue(20),
    padding: RFValue(10),
  },
  registerButton: {
    width: RFValue(200),
    height: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    marginTop: RFValue(30),
  },
  registerButtonText: {
    color: '#ff5722',
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
  cancelButton: {
    width: RFValue(200),
    height: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(5),
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

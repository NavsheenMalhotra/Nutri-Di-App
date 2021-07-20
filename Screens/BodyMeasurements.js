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
  ImageBackground,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { HealthData } from './HealthData';
import MyHeader from '../components/MyHeader';

export default class BodyMeasurements extends Component {
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

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
              <Text style={styles.modalTitle}>Body Measurements</Text>

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
                placeholder={'Phone Number'}
                maxLength={12}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Weight (IN KG)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Height (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Shoulder To Shoulder (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Bust (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Waist (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Wrist (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Thigh (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Hips (IN CM)'}
                maxLength={3}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      alert(
                        'Successfully Added The Information! Thanks For Filling The Form!'
                      ),
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
                  <Text style={{ color: 'black' }}>Submit!</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };
  goToHomePage = () => {
    this.props.navigation.navigate('HealthData');
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <MyHeader navigation={this.props.navigation} />
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
    fontSize: RFValue(30),
    color: 'black',
    textAlign: 'center',
    margin: RFValue(30),
    width: RFValue(190),
    fontWeight: 'bold',
    fontFamily: 'HarlowSolidItalic',
  },
  modalContainer: {
    flex: 1,
    borderRadius: RFValue(20),
    borderColor: 'black',
    borderWidth: RFValue(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5CC',
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

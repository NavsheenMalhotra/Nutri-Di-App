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

export default class HealthRecords extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      isModalVisible: false,
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
              <Text style={styles.modalTitle}>Medical Form!</Text>

              <TextInput
                style={styles.formTextInput}
                placeholder={'Full Name'}
                maxLength={50}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Age (In Years)'}
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
                placeholder={'Name Of The Physician or Clinic/Hospital'}
                maxLength={50}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
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
                placeholder={'Pin Code Of Your Area'}
                maxLength={8}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Allergies? (If Any)'}
                maxLength={50}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Recent Medication That You Are Continuing'}
                maxLength={50}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Any Disease Suffered Previously?'}
                maxLength={50}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Name Of The Disease'}
                maxLength={50}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={
                  'Time Duration You Are Suffering From That Disease?(In Years)'
                }
                maxLength={3}
                multiline={true}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Any Specific Suggestions For Your Diet Plan?'}
                maxLength={200}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />

              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      alert(
                        'Thanks For Filling The Form! We Will Plan The Diet Accordingly!'
                      ),
                      this.goToHomePage()
                    )
                  }>
                  <Text style={styles.registerButtonText}>Submit!</Text>
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
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: RFValue(40),
    color: 'black',
   margin: RFValue(30),
    width: RFValue(210),
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
    backgroundColor: '#FFFFCC',
    width: RFValue(260),
    marginRight: RFValue(30),
    marginLeft: RFValue(30),
    marginTop: RFValue(10),
    marginBottom: RFValue(30),
  },
  formTextInput: {
    width: RFValue(200),
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

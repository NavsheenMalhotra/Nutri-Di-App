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
import MyHeader from '../components/MyHeader'

export default class E4 extends React.Component {
  render() {
    return (
      <SafeAreaProvider>

        <View style={styles.container}>
        <MyHeader
        navigation={this.props.navigation} 
        />
        <Text style={styles.diet}>
        PLAN 4
        </Text>
          <Image
            source={require('../assets/eggetarian4.jpg')}
            style={{ width: RFValue(320), height: RFValue(280), marginTop: RFValue(80), alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}
          />
          
            <Text style={styles.t1}>COMPLETED! BE PROUD OF YOURSELF!
            </Text>
         
          <Image 
           source={require('../assets/L.png')}
            style={{ width: RFValue(50), height: RFValue(50), marginTop: RFValue(50), marginLeft: RFValue(200) }}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFCC' },
  t1: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(25),
    fontWeight: '50',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: RFValue(40)
  },
  diet: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(50),
    fontWeight: RFValue(30),
    textAlign: 'center',
     marginTop: RFValue(30)
  },
});

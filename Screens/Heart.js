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
export default class Heart extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
      <View>
      <MyHeader
        navigation={this.props.navigation} 
        />
      </View>
      </SafeAreaProvider>
    )
  }
}
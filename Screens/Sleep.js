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

export default class Sleep extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
      <View>
      <MyHeader
        navigation={this.props.navigation} 
        />
        <ImageBackground
        source={require('../assets/S.jpg')}
        style={{width: RFValue(330), height: RFValue(620)}}
        >
        </ImageBackground>
        <TouchableOpacity onPress={() => { window.location.replace('https://sleepcalculator.com/'); }}>
        <Text style={styles.t}>
        Click Here To Calculate Your SleepTime!
        </Text>
        </TouchableOpacity>
        
      </View>
      </SafeAreaProvider>
    )
  }
}
const styles=StyleSheet.create({
  t:{
     color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'HarlowSolidItalic',
  }
})
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
import MyHeader from '../components/MyHeader';

export default class Activity extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.b}>
          <MyHeader navigation={this.props.navigation} />
          <ImageBackground
            source={require('../assets/a.jpg')}
            style={{ width: RFValue(330), height: RFValue(500) }}></ImageBackground>
          <Text style={styles.quote}>
            Don't Let Anyone Work Harder Than You Do!
          </Text>
          <TouchableOpacity
            onPress={() => {
              window.location.replace(
                'https://www.healthline.com/health/fitness-exercise/at-home-workouts#intermediate-routine'
              );
            }}>
            <Text style={styles.t}>Exercise Plan!</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/pineapple.jpg')}
            style={{ width: RFValue(130), height: RFValue(120), marginLeft: RFValue(200), marginTop: RFValue(-75), color: '#E5FFCC' }}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  t: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(30),
    fontFamily: 'HarlowSolidItalic',
    marginTop: RFValue(40),
  },
  quote: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(20),
    fontFamily: 'HarlowSolidItalic',
    textAlign: 'center',
    backgroundColor: '#FFE5CC',
  },
  b: {
    backgroundColor: '#FFFFCC',
  },
});

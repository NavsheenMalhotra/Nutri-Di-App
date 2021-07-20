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

export default class MindFullness extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <MyHeader navigation={this.props.navigation} />
          <ImageBackground
            source={require('../assets/yoga.jpg')}
            style={{ width: RFValue(330), height: RFValue(300) }}></ImageBackground>
          <TouchableOpacity
          onPress={() => { window.location.replace('https://ssyoga.org/a-guide-to-some-simple-yoga-poses-to-stretch-and-strengthen/?gclid=Cj0KCQjwxJqHBhC4ARIsAChq4attfeGogl3iRzaq_8fkecMPFKiDOgbcPo4iJBHQ8t6NbGe6oh7BwMQaAod0EALw_wcB'); }}
          >
            <Text style={styles.t}>Take Out Time To Make Your Soul Happy!</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/y.jpg')}
            style={{ width: RFValue(330), height: RFValue(200), marginTop: RFValue(30) }}
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
    textAlign: 'center',
    marginTop: RFValue(30),
  },
});

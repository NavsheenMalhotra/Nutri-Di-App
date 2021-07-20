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
import { Icon, Badge } from 'react-native-elements';


export default class HealthData extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  goToNutrition = () => {
    this.props.navigation.navigate('Nutrition');
  };
  goToMindfullness = () => {
    this.props.navigation.navigate('Mindfullness');
  };
  goToActivity = () => {
    this.props.navigation.navigate('Activity');
  };
  goToSleep = () => {
    this.props.navigation.navigate('Sleep');
  };
  goToBodyMeasurements = () => {
    this.props.navigation.navigate('BodyMeasurements');
  };
  goToHealthRecords = () => {
    this.props.navigation.navigate('HealthRecords');
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
 
          <MyHeader navigation={this.props.navigation} />
          <TouchableOpacity style={{ backgroundColor: '#CCFFCC' }}>
            <Text style={styles.text}>Health Data</Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                this.goToNutrition();
              }}>
              <Image
                source={require('../assets/nutrition.png')}
                style={{ width: RFValue(120), height: RFValue(90) }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.box1}
              onPress={() => {
                this.goToMindfullness();
              }}>
              <Image
                source={require('../assets/mindfullness.jpg')}
                style={{ width: RFValue(120), height: RFValue(90) }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.box2}
              onPress={() => {
                this.goToActivity();
              }}>
              <Image
                source={require('../assets/activity.jpeg')}
                style={{ width: RFValue(120), height: RFValue(90) }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.box3}
              onPress={() => {
                this.goToSleep();
              }}>
              <Image
                source={require('../assets/sleep.jpg')}
                style={{ width: RFValue(120), height: RFValue(90) }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.goToBodyMeasurements();
            }}>
            <Text style={styles.t}>Body Measurements</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.goToHealthRecords();
            }}>
            <Text style={styles.t2}>Health Records</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              window.location.replace(
                'https://www.healthlinkbc.ca/health-topics/tx4374'
              );
            }}>
            <Text style={styles.t3}>Heart</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/b.jpg')}
            style={{ width: RFValue(50), height: RFValue(32), marginTop: RFValue(-100) }}
          />
          <Image
            source={require('../assets/h.png')}
            style={{ width: RFValue(50), height: RFValue(35) }}
          />
          <Image
            source={require('../assets/3574366.png')}
            style={{ width: RFValue(48), height: RFValue(35), backgroundColor: 'white' }}
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
    fontSize: RFValue(28),
    fontFamily: 'HarlowSolidItalic',
    marginTop: RFValue(80),
    backgroundColor: '#FFFFCC',
    marginLeft: RFValue(50),
  },
  t2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(30),
    fontFamily: 'HarlowSolidItalic',
    backgroundColor: '#FFCCCC',
    marginLeft: RFValue(50),
  },
  t3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(30),
    fontFamily: 'HarlowSolidItalic',
    backgroundColor: '#CCFFFF',
    marginLeft: RFValue(50),
  },
  container: { flex: 0.2, backgroundColor: '#CCE5FF' },
  text: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: RFValue(10),
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: RFValue(300),
  },
  box: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: RFValue(130),
    marginTop: RFValue(100),
    borderRadius: RFValue(9),
    height: RFValue(100),
    marginLeft: RFValue(15),
  },
  box1: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: RFValue(130),
    marginTop: RFValue(-100),
    height: RFValue(100),
    marginLeft: RFValue(155),
    borderRadius: RFValue(9),
  },
  box2: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: RFValue(130),
    marginTop: RFValue(100),
    height:RFValue(100),
    marginLeft: RFValue(15),
    borderRadius: RFValue(9),
  },
  box3: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: RFValue(130),
    marginTop: RFValue(-100),
    height: RFValue(100),
    marginLeft: RFValue(160),
    borderRadius: RFValue(9),
  },
});

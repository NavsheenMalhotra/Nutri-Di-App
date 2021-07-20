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

export default class Nutrition extends React.Component {
  goToVegetarians=()=>{
this.props.navigation.navigate('Vegetarians')
  }
  goToNonVegetarians=()=>{
this.props.navigation.navigate('NonVegetarians')
  }
   goToEggetarians=()=>{
this.props.navigation.navigate('Eggetarian')
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
        <MyHeader
        navigation={this.props.navigation} 
        />
          <Text style={[styles.cookbook, { color: 'green' }]}>THE</Text>
          <Text style={[styles.cookbook, { color: 'green' }]}>
            HEALTHY DIET
          </Text>
          <Text style={[styles.cookbook, { color: 'brown' }]}>COOKBOOK</Text>
          <Text style={styles.quote}>
            "There Is No Diet That Will Do What Eating Healthy Does.... Skip The
            Diet Just Eat Healthy And Stay Fit And Healthy!"
          </Text>
          <Image
            source={require('../assets/51MEy5WH2IL.jpg')}
            style={{ width: RFValue(333), height: RFValue(120), marginTop: RFValue(20) }}
          />
          <Image
          source={require('../assets/pointing.jpg')}
          style={{ width: RFValue(100), height:RFValue(100), marginTop: RFValue(20), marginBottom: RFValue(-80), marginLeft: RFValue(120), color: '#E0E0E0'}}
          />
          <TouchableOpacity onPress={()=>{
            this.goToVegetarians()
          }}>
            <Text style={[styles.diet, { marginTop: RFValue(100) }]}>
              Diet Chart For Vegetarians...
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this.goToNonVegetarians()
          }}>
            <Text style={[styles.diet, { marginTop: RFValue(15) }]}>
              Diet Chart For Non-Vegetarians...
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{
            this.goToEggetarians()
          }}
          >
            <Text style={[styles.diet, { marginTop: RFValue(15) }]}>
              Diet Chart For Eggetarians...
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0E0E0' },
  cookbook: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(50),
    fontWeight: 'bold',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: RFValue(10),
    alignItems: 'center',
    textAlign: 'center',
  },
  quote: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(15),
    fontWeight: '50',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  diet: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(17),
    fontWeight: '30',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import GetStarted from './Screens/GetStarted';
import SignIn from './Screens/SignIn';
import HealthData from './Screens/HealthData';
import Nutrition from './Screens/Nutrition';
import Mindfullness from './Screens/Mindfullness';
import Activity from './Screens/Activity';
import Sleep from './Screens/Sleep';
import Eggetarian from './Screens/Eggetarian';
import Vegetarians from './Screens/Vegetarians';
import NonVegetarians from './Screens/NonVegetarians';
import V2 from './Screens/V2';
import V3 from './Screens/V3';
import V4 from './Screens/V4';
import NotificationScreen from './Screens/NotificationScreens';
import NV2 from './Screens/NV2';
import NV3 from './Screens/NV3';
import NV4 from './Screens/NV4';
import E2 from './Screens/E2';
import E3 from './Screens/E3';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import E4 from './Screens/E4';
import BodyMeasurements from './Screens/BodyMeasurements';
import HealthRecords from './Screens/HealthRecords'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
const SwitchNavigator = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  GetStarted: { screen: GetStarted },
  HealthData: { screen: HealthData },
   Nutrition: { screen: Nutrition },
   Mindfullness: { screen: Mindfullness },
   Activity: { screen: Activity },
   Sleep: { screen: Sleep },
   Vegetarians: { screen: Vegetarians },
    SignIn: { screen: SignIn },
  AppDrawerNavigator: {screen: AppDrawerNavigator},
   NonVegetarians: { screen: NonVegetarians },
   Eggetarian: { screen: Eggetarian },
   BodyMeasurements: { screen: BodyMeasurements },
   V3: { screen: V3 },
   V2: { screen: V2 },
   V4: { screen: V4 },
   NV3: { screen: NV3 },
   NV2: { screen: NV2 },
   NV4: { screen: NV4 },
   E3: { screen: E3 },
   E2: { screen: E2 },
   E4: { screen: E4 },
   HealthRecords: {screen: HealthRecords},
   NotificationScreen: { screen: NotificationScreen },
  
 
});

const AppContainer = createAppContainer(SwitchNavigator);

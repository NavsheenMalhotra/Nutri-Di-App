import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import NotificationScreen from '../Screens/NotificationScreens';
import SettingScreen from '../Screens/SettingScreen';
import { Icon } from 'react-native-elements';
import Activity from '../Screens/Activity';
import BodyMeasurements from '../Screens/BodyMeasurements';
import Nutrition from '../Screens/Nutrition';
import Mindfullness from '../Screens/Mindfullness';
import Sleep from '../Screens/Sleep';
import HealthRecords from '../Screens/HealthRecords';
import Heart from '../Screens/Heart';
import HealthData from '../Screens/HealthData';
export const AppDrawerNavigator = createDrawerNavigator(
  {
     HealthData: {
      screen: HealthData,
      navigationOptions: {
        drawerIcon: <Icon name="nutritionix" type="font-awesome" />,
        drawerLabel: 'Nutrition',
      },
    },
    Nutrition: {
      screen: Nutrition,
      navigationOptions: {
        drawerIcon: <Icon name="nutritionix" type="font-awesome" />,
        drawerLabel: 'Nutrition',
      },
    },
    Mindfullness: {
      screen: Mindfullness,
      navigationOptions: {
        drawerIcon: <Icon name="brain" type="font-awesome" />,
        drawerLabel: 'Mindfullness',
      },
    },
    Activity: {
      screen: Activity,
      navigationOptions: {
        drawerIcon: <Icon name="gift" type="font-awesome" />,
        drawerLabel: 'Activity',
      },
    },
    Sleep: {
      screen: Sleep,
      navigationOptions: {
        drawerIcon: <Icon name="bed" type="font-awesome" />,
        drawerLabel: 'Sleep',
      },
    },
    BodyMeasurements: {
      screen: BodyMeasurements,
      navigationOptions: {
        drawerIcon: <Icon name="weight" type="font-awesome" />,
        drawerLabel: 'BodyMeasurements',
      },
    },
    HealthRecords: {
      screen: HealthRecords,
      navigationOptions: {
        drawerIcon: <Icon name="medkit" type="font-awesome" />,
        drawerLabel: 'HealthRecords',
      },
    },
    Heart: {
      screen: Heart,
      navigationOptions: {
        drawerIcon: <Icon name="heartbeat" type="font-awesome" />,
        drawerLabel: 'Heart',
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        drawerIcon: <Icon name="bell" type="font-awesome" />,
        drawerLabel: 'Notifications',
      },
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        drawerIcon: <Icon name="settings" type="fontawesome5" />,
        drawerLabel: 'Settings',
      },
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Nutrition',
  }
);

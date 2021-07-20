import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      value: '',
    };
  }
  getNumberOfUnreadNotifications() {
    db.collection('all_notifications')
      .where('notification_status', '==', 'unread')
      .where('targeted_user_id', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var unreadNotifications = snapshot.docs.map((doc) => doc.data());
        this.setState({
          value: unreadNotifications.length,
        });
      });
  }

  componentDidMount() {
    this.getNumberOfUnreadNotifications();
  }

  BellIconWithBadge = () => {
    return (
      <View>
        <Icon
          name="bell"
          type="font-awesome"
          color="black"
          size={25}
          onPress={() => this.props.navigation.navigate('NotificationScreen')}
        />
        <Badge
          value={this.state.value}
          containerStyle={{
            position: 'absolute',
            top: RFValue(-4),
            right: RFValue(-4),
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="black"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: 'NUTRIDI APP!',
          style: { color: 'black', fontSize: RFValue(20), fontWeight: 'bold' },
        }}
        rightComponent={<this.BellIconWithBadge {...this.props} />}
        backgroundColor="#CCFFFF"
      />
    );
  }
}

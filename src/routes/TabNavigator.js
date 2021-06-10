import React from 'react';
import {View} from 'react-native';

import {activeColor, inactiveColor, barColor} from '../resources/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import AltIcon from 'react-native-vector-icons/Entypo';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/Profile';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Search: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-search'} />
          </View>
        ),
      },
    },
    Trophy: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <AltIcon style={[{color: tintColor}]} size={25} name={'trophy'} />
          </View>
        ),
      },
    },
    Profile: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor,
    inactiveColor,
    barStyle: {backgroundColor: barColor},
  },
);

export default createAppContainer(TabNavigator);

import React from 'react';
import {StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

/*
    Drawer
*/
const Drawer = createDrawerNavigator();

import {HOME_SCREEN} from '../constants/screens';
import {transparent} from '../resources/colors';

import CustomDrawer from '../components/layouts/CustomDrawer';

import Home from '../screens/Home';

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={HOME_SCREEN}
      drawerContent={CustomDrawer}
      drawerStyle={[{backgroundColor: transparent}, styles.drawer]}>
      {/* ROUTES */}
      <Drawer.Screen name={HOME_SCREEN} component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  drawer: {
    width: 280,
    height: '80%',
    marginTop: 60,
  },
});

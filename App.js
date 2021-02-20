import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import * as Screens from "./screens";

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="black"
        barStyle={{ backgroundColor: 'yellow' }}
      >
        <Tab.Screen 
          name="Home"
          component={Screens.Home}
          options={{tabBarIcon:({ color }) => (<Icon name="home" color={color} size={26} />)}}
        />

        <Tab.Screen 
          name="Produtos"
          component={Screens.Produtos}
          options={{tabBarIcon:({ color }) => (<Icon name="gamepad" color={color} size={22} />)}}
        />

        <Tab.Screen 
          name="Login"
          component={Screens.Login}
          options={{tabBarIcon:({ color }) => (<Icon name="user" color={color} size={24} />)}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

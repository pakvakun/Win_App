import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HelloScreen from '../../../Screens/AuthScreens/HelloScreen';
import LoginScreen from '../../../Screens/AuthScreens/LoginScreen';
import SendCodeScreen from '../../../Screens/AuthScreens/SendCodeScreen';
import Logo from '../../../src/assets/icons/logo';
import NavBar from '../NavBar';
import { CompleteLoginScreen } from '../../../Screens/AuthScreens/CompleteLoginScreen';

const AuthStackNavigator = createStackNavigator();

export const AuthStack = ({navigation, route}) => (
  <AuthStackNavigator.Navigator
    // initialRouteName="HelloScreen"
    headerMode="screen"
    screenOptions={{
      headerTransparent: true,
      headerTitle: null,
    }}>
    <AuthStackNavigator.Screen
      name="HelloScreen"
      component={HelloScreen}
      options={NavBar({leftLogo: true, headerTransparent: true})}
    />
    <AuthStackNavigator.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={NavBar({})}
    />
    <AuthStackNavigator.Screen
      name="SendCodeScreen"
      component={SendCodeScreen}
      options={NavBar({})}
    />
    <AuthStackNavigator.Screen
      name="CompleteLoginScreen"
      component={CompleteLoginScreen}
      options={NavBar({})}
    />
  </AuthStackNavigator.Navigator>
);

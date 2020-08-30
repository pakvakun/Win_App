import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavBar from '../NavBar';
import ProfileScreen from '../../../Screens/AppScreens/ProfileScreens/ProfileScreen';
import SettingsScreen from '../../../Screens/AppScreens/ProfileScreens/SettingsScreen';
import MainSettingsScreen from '../../../Screens/AppScreens/ProfileScreens/MainSettingsScreen';
import PushSettingsScreen from '../../../Screens/AppScreens/ProfileScreens/PushSettingsScreen';
import LoginScreen from '../../../Screens/AuthScreens/LoginScreen';
import SendCodeScreen from '../../../Screens/AuthScreens/SendCodeScreen';

const ProfileStackNavigator = createStackNavigator();

export const ProfileStack = ({navigation, route}) => {
  return (
    <ProfileStackNavigator.Navigator
      headerMode="screen"
      screenOptions={{headerShown: true}}>
      <ProfileStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={NavBar({})}
      />
      <ProfileStackNavigator.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={NavBar({title: 'Настройки', headerTitleAlign: 'left'})}
      />
      <ProfileStackNavigator.Screen
        name="MainSettingsScreen"
        component={MainSettingsScreen}
        options={NavBar({title: 'Основное', headerTitleAlign: 'left'})}
      />
      <ProfileStackNavigator.Screen
        name="PushSettingsScreen"
        component={PushSettingsScreen}
        options={NavBar({title: 'Push-уведомления', headerTitleAlign: 'left'})}
      />
      <ProfileStackNavigator.Screen
        name="ConfirmationPhone"
        component={LoginScreen}
        options={NavBar({title: 'Push-уведомления', headerTitleAlign: 'left'})}
      />
      <ProfileStackNavigator.Screen
        name="ConfirmationPhoneSendCode"
        component={SendCodeScreen}
        options={NavBar({title: 'Push-уведомления', headerTitleAlign: 'left'})}
      />
    </ProfileStackNavigator.Navigator>
  );
};

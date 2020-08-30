import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabBar} from './TabBar';
import CommonInfoScren from '../../../Screens/AppScreens/CommonScreens/CommonScreenInfo';
import NavBar from '../NavBar';

const AppStackNavigator = createStackNavigator();

export const AppStack = ({navigation}) => (
  <AppStackNavigator.Navigator
    screenOptions={{gestureEnabled: false, headerShown: null}}>
    <AppStackNavigator.Screen name="TabBar" component={TabBar} />
    <AppStackNavigator.Screen
      name="CommonInfoScreen"
      component={CommonInfoScren}
      options={NavBar({})}
    />
  </AppStackNavigator.Navigator>
);

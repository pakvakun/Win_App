import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '../../../Screens/AppScreens/ListScreens/ListScreen';
import NavBar from '../NavBar';
import CourseScreen from '../../../Screens/AppScreens/ListScreens/CourseScreen';
import TrainingScreen from '../../../Screens/AppScreens/ListScreens/TrainingScreen';
import {Colors} from '../../../src/Themes';

const ListStackNavigator = createStackNavigator();

export const ListStack = ({navigation}) => (
  <ListStackNavigator.Navigator
    screenOptions={{gestureEnabled: false, headerShown: true}}>
    <ListStackNavigator.Screen
      name="ListScreen"
      component={ListScreen}
      options={NavBar({})}
    />
    <ListStackNavigator.Screen
      name="CourseScreen"
      component={CourseScreen}
      options={NavBar({
        headerTransparent: true,
        leftComponentColor: Colors.white,
      })}
    />
    <ListStackNavigator.Screen
      name="TrainingScreen"
      component={TrainingScreen}
      options={NavBar({
        headerTransparent: true,
        leftComponentColor: Colors.white,
      })}
    />
  </ListStackNavigator.Navigator>
);

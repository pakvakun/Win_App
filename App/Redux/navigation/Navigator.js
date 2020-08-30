import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack, AppStack} from './Navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ModalComponent from '../../Components/ModalComponent';
import { hexToRGBA } from '../../src/Common/helpers';
import { Colors } from '../../src/Themes';
const AppStackNavigator = createStackNavigator();

export const Navigator = () => (
  <SafeAreaProvider>
    <AppStackNavigator.Navigator
      headerMode="none"
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'CompleteLoginScreen'}>
      <AppStackNavigator.Screen name="AuthStack" component={AuthStack} />
      <AppStackNavigator.Screen name="AppStack" component={AppStack} />
      <AppStackNavigator.Screen name="Modal" component={ModalComponent} options={{cardStyle: {backgroundColor: 'transparent'}, animationEnabled: false,}} />
    </AppStackNavigator.Navigator>
  </SafeAreaProvider>
);

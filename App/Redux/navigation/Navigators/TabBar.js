import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabListIcon from '../../../src/assets/icons/BottomTabListIcon';
import IconProfile from '../../../src/assets/icons/IconProfile';
import BottomTabAddIcon from '../../../src/assets/icons/BottomTabAddIcon';
import {ProfileStack} from './ProfileStack';
import {ListStack} from './ListStack';
import { hexToRGBA } from '../../../src/Common/helpers';
import { Colors } from '../../../src/Themes';
import { CreateCourseStack } from './CreateCourseStack';

const BottomTabs = createBottomTabNavigator();
let visible = true;

const getScreenOptions = () => {
  return ({route, navigation}) => {
    console.log(route);
    const isTabBarVisibleIsUndefined =
      route.params?.tabBarVisible !== 'undefined';

    if (isTabBarVisibleIsUndefined) {
      visible = route.params?.tabBarVisible;
    }

    return {
      tabBarIcon: ({focused, color, size}) => {
        switch (route.name) {
          case 'List':
            return <BottomTabListIcon fill={color} />;
            break;
          case 'AddEvent':
            return <BottomTabAddIcon />;
            break;
          case 'Profile':
            return <IconProfile fill={color} />;
            break;
        }
      },
      tabBarVisible: visible,
    };
  };
};

const getTabBarOptions = () => {
  return {
    activeTintColor: '#171925',
    inactiveTintColor: hexToRGBA('#7D88A5', 0.6),
    showLabel: false,
    style: {
      height: 86,
      paddingTop: visible ? 13 : 0,
      borderTopColor: visible ? Colors.borderGrey : Colors.white,
    },
  };
};

export const TabBar = () => (
    <BottomTabs.Navigator
      screenOptions={getScreenOptions()}
      tabBarOptions={getTabBarOptions()}>
      <BottomTabs.Screen name="List" component={ListStack} />
      <BottomTabs.Screen name="AddEvent" component={CreateCourseStack} options={{tabBarVisible: false}}/>
      <BottomTabs.Screen name="Profile" component={ProfileStack} />
    </BottomTabs.Navigator>
)

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavBar from '../NavBar';
import CreateCourseMediaScreen from '../../../Screens/AppScreens/CreateCourseScreens/CreateCourseMediaScreen';
import CreateCourseAboutScreen from '../../../Screens/AppScreens/CreateCourseScreens/CreateCourseAboutScreen';
import CreateCourseTrainingScreen from '../../../Screens/AppScreens/CreateCourseScreens/CreateCourseTrainingScreen';
import CreateTrainingScreen from '../../../Screens/AppScreens/CreateCourseScreens/CreateTrainingScreen';
import CreateTrainingVideoScreen from '../../../Screens/AppScreens/CreateCourseScreens/CreateTrainingScreens/CreateTrainingVideoScreen';
import CreateTrainingAboutScreen from '../../../Screens/AppScreens/CreateCourseScreens/CreateTrainingScreens/CreateTrainingAboutScreen';
import TrainingScreen from '../../../Screens/AppScreens/ListScreens/TrainingScreen';

const CreateCourseStackNavigator = createStackNavigator();

export const CreateCourseStack = ({navigation, route}) => {
  return (
    <CreateCourseStackNavigator.Navigator
      headerMode="screen"
      screenOptions={{
        headerTransparent: false,
      //   headerTitle: null,
      }}>
      <CreateCourseStackNavigator.Screen
        name="CreateCourseMediaScreen"
        component={CreateCourseMediaScreen}
        options={NavBar({title: 'Создание курса', headerTitleAlign: 'left'})}
      />
      <CreateCourseStackNavigator.Screen
        name="CreateCourseAboutScreen"
        component={CreateCourseAboutScreen}
        options={NavBar({title: 'Создание курса', headerTitleAlign: 'left'})}
      />
      <CreateCourseStackNavigator.Screen
        name="CreateCourseTrainingScreen"
        component={CreateCourseTrainingScreen}
        options={NavBar({title: 'Создание курса', headerTitleAlign: 'left'})}
      />
      <CreateCourseStackNavigator.Screen
        name="CreateTrainingScreen"
        component={CreateTrainingScreen}
        options={NavBar({headerTitleAlign: 'left'})}
      />
      <CreateCourseStackNavigator.Screen
        name="CreateTrainingVideoScreen"
        component={CreateTrainingVideoScreen}
        options={NavBar({title: 'Видео-тренировка', headerTitleAlign: 'left'})}
      />
      <CreateCourseStackNavigator.Screen
        name="CreateTrainingAboutScreen"
        component={CreateTrainingAboutScreen}
        options={NavBar({title: 'Видео-тренировка', headerTitleAlign: 'left'})}
      />
      <CreateCourseStackNavigator.Screen
        name="TrainingScreen"
        component={TrainingScreen}
        options={NavBar({title: 'Видео-тренировка', headerTitleAlign: 'left'})}
      />
    </CreateCourseStackNavigator.Navigator>
  );
};

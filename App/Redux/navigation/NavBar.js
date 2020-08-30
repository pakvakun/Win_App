import React from 'react';
import IconArrow from '../../src/assets/icons/IconArrow';
import Logo from '../../src/assets/icons/logo';
import {TouchableOpacity} from 'react-native';
import { Colors } from '../../src/Themes';

const NavBar = ({
  title,
  leftComponent,
  leftComponentColor,
  rightComponent,
  leftLogo,
  headerTitleAlign,
  headerTransparent,
  headerShown,
}) => ({navigation, route}) => {
  const getLeftComponent = () => {
    if (leftLogo) {
      return <Logo />;
    } else if (route?.params?.leftComponent) {
      return route.params.leftComponent;
    } else if (leftComponent) {
      return leftComponent;
    } else if (route?.params?.iconBack) {
      return (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          {route.params.iconBack}
        </TouchableOpacity>
      );
    } else {
      if (typeof leftComponent === 'undefined') {
        return (
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <IconArrow
              color={leftComponentColor || route.params?.leftComponentColor}
            />
          </TouchableOpacity>
        );
      }
    }
  };
  return {
    headerLeft: getLeftComponent,
    headerLeftContainerStyle: route?.params?.headerLeftContainerStyle || {
      paddingHorizontal: leftLogo ? 44.4 : 20,
    },
    title: route?.params?.title || title || '',
    headerTitleAlign,
    headerTitleStyle: {
      color: Colors.black,
    },
    headerRight: () => route?.params?.rightComponent || rightComponent,
    headerRightContainerStyle: route?.params?.headerRightContainerStyle || {
      paddingHorizontal: 20,
    },
    headerTransparent: headerTransparent,
    headerShown: route?.params?.headerShown || headerShown || true,
  };
};

export default NavBar;

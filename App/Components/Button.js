import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
import {TextComponent} from './TextComponent';
import {Colors} from '../src/Themes';

const Button = ({children, handler, colors, style, buttonStyle, textSize, textWeight, disabled}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors || ['#1895E2', '#3549B4']}
      style={{borderRadius: 1000, ...style}}>
      <TouchableOpacity
        style={[{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 14,
        }, buttonStyle]}
        delayPressIn={0}
        onPress={handler}
        disabled={disabled}>
        <TextComponent
          color={Colors.white}
          size={textSize || 14}
          weight={textWeight || 'Bold'}>
          {children}
        </TextComponent>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

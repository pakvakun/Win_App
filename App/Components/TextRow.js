import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextComponent} from './TextComponent';
import IconNext from '../src/assets/icons/IconNext';
import {Colors} from '../src/Themes';
import {Styles} from './Styles/TextRowStyle';

const TextRow = ({
  icon,
  text,
  handler,
  targetRoute,
  routeParams,
  style,
  textColor,
  withoutArrow,
  navigation,
}) => {
  const handlePressRow = () => {
    if (targetRoute) {
      navigation.navigate(targetRoute, {
        screen: targetRoute,
        params: {...routeParams},
      });
    }
  };
  return (
    <TouchableOpacity
      style={[Styles.container, style]}
      onPress={handlePressRow}>
      <View style={Styles.content}>
        <View style={Styles.iconContainer}>{icon}</View>
        <TextComponent
          color={textColor || Colors.grey}
          size={14}
          lineHeight={0}
          style={{paddingLeft: 16.6}}>
          {text}
        </TextComponent>
      </View>
      {!withoutArrow && (
        <IconNext
          fill={Colors.grey}
          style={{transform: [{rotate: '270deg'}]}}
        />
      )}
    </TouchableOpacity>
  );
};

export default TextRow;

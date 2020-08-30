import React from 'react';
import {View} from 'react-native';
import {Colors} from '../src/Themes';

const Block = ({children, background, style}) => {
  return (
    <View
      style={{
        backgroundColor: background || Colors.white,
        paddingHorizontal: 20,
        ...style,
      }}>
      {children}
      <View style={{width: '100%', height: 7, backgroundColor: '#F9F9FA', marginTop: 24}} />
    </View>
  );
};

export default Block;

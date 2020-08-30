import React from 'react';
import { View } from 'react-native';
import { Colors } from '../src/Themes';

const Separator = ({height, color}) => {
    return (
        <View style={{width: '100%', height: height || 2, backgroundColor: color || Colors.grey6}} />
    );
};

export default Separator;

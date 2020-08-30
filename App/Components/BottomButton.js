import React from 'react';
import Button from './Button';
import {Styles} from './Styles/BottomButton';

const BottomButton = ({children, handler, disabled, colors}) => {
  return <Button disabled={disabled} style={Styles.button} handler={handler} colors={colors}>{children}</Button>;
};

export default BottomButton;

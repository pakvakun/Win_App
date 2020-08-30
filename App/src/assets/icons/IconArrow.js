import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconArrow(props) {
  return (
    <Svg width={16.3} height={12.924} viewBox="0 0 16.3 12.924" {...props}>
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 2557"
        d="M15.25 5.345a1.054 1.054 0 00-.183-.014L3.426 5.324l.227-.106a2.112 2.112 0 00.6-.422l2.919-2.747a1.093 1.093 0 00.153-1.4A1.056 1.056 0 005.741.512L.459 5.62a1.056 1.056 0 000 1.493h0l5.279 5.279a1.056 1.056 0 001.584-.106 1.093 1.093 0 00-.153-1.4L4.255 7.963a2.112 2.112 0 00-.528-.385l-.317-.143 11.6.008a1.093 1.093 0 001.114-.887 1.056 1.056 0 00-.874-1.211z"
        fill={props.color || '#a7abb4'}
        stroke={props.color || '#a7abb4'}
        strokeWidth={0.3}
      />
    </Svg>
  );
}

export default IconArrow;

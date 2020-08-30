import * as React from 'react';
import Svg, {Text, TSpan} from 'react-native-svg';

function HelloText(props) {
  return (
    <Svg width={255} height={72} viewBox="0 0 255 72" {...props} style={{marginTop: -20}}>
      <Text
        data-name="\u043D\u0430\u0434 \u0441\u043E\u0431\u043E\u0439?"
        strokeLinejoin="round"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        transform="translate(1.5 56.5)"
        strokeWidth={1.5}
        fontSize={46}
        fontFamily="Oswald-Bold, Oswald"
        fontWeight={700}>
        <TSpan x={0} y={1}>
          {'\u041D\u0410\u0414 \u0421\u041E\u0411\u041E\u0419?'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default HelloText;

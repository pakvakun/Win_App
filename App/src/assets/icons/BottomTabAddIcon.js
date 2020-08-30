import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

function BottomTabAddIcon(props) {
  return (
    <Svg width={45.241} height={45.241} viewBox="0 0 45.241 45.241" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.105}
          y1={0.14}
          x2={0.914}
          y2={0.862}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#1893e1" />
          <Stop offset={1} stopColor="#344bb5" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          x1={0.141}
          y1={0.153}
          x2={0.927}
          y2={0.884}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#1894e1" />
          <Stop offset={1} stopColor="#354ab5" />
        </LinearGradient>
      </Defs>
      <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 14079">
        <Path
          data-name="\u041A\u043E\u043D\u0442\u0443\u0440 2549"
          d="M22.621 0A22.621 22.621 0 110 22.621 22.621 22.621 0 0122.621 0z"
          opacity={0.116}
          fill="url(#prefix__a)"
        />
        <Path
          data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1468"
          d="M18.1 0A18.1 18.1 0 110 18.1 18.1 18.1 0 0118.1 0z"
          transform="translate(4.525 4.525)"
          fill="url(#prefix__b)"
        />
        <G data-name="add (1)">
          <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 10743">
            <Path
              data-name="\u041A\u043E\u043D\u0442\u0443\u0440 21"
              d="M28.523 21.878h-4.889v-4.886a.876.876 0 00-.9-.706.876.876 0 00-.907.705v4.887h-4.888a.876.876 0 00-.705.908.876.876 0 00.705.9h4.886v4.89a.876.876 0 00.909.71.876.876 0 00.9-.71v-4.89h4.89a.876.876 0 00.705-.907.876.876 0 00-.706-.901z"
              fill="#fff"
              stroke="#fff"
              strokeWidth={0.5}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default BottomTabAddIcon;

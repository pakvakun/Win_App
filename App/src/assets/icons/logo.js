import * as React from 'react';
import Svg, {G, Rect} from 'react-native-svg';

function Logo(props) {
  return (
    <Svg
      data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 10929"
      width={24.025}
      height={19.912}
      viewBox="0 0 24.025 19.912"
      {...props}>
      <Rect
        data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 4"
        width={2.71}
        height={9.213}
        rx={1.355}
        transform="rotate(-90 13.659 6.253)"
        fill="#fff"
      />
      <G
        data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 10732"
        fill="#fff">
        <Rect
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1"
          width={2.71}
          height={16.259}
          rx={1.355}
          transform="rotate(-30 2.528 .677)"
        />
        <Rect
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 2"
          width={2.71}
          height={16.259}
          rx={1.355}
          transform="rotate(-150 10.016 5.588)"
        />
        <Rect
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 3"
          width={2.71}
          height={10.839}
          rx={1.355}
          transform="rotate(-30 16.005 -14.588)"
        />
      </G>
    </Svg>
  );
}

export default Logo;

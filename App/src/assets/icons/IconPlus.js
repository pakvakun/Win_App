import * as React from "react"
import Svg, { G, Rect } from "react-native-svg"

function IconPlus(props) {
  return (
    <Svg width={13} height={13} viewBox="0 0 13 13" {...props}>
      <G
        data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 14079"
        transform="translate(-36.707 -486.707)"
        fill="#a7abb4"
      >
        <Rect
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 2220"
          width={3}
          height={13}
          rx={1.5}
          transform="translate(41.707 486.707)"
        />
        <Rect
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 2221"
          width={3}
          height={13}
          rx={1.5}
          transform="rotate(90 -221 270.707)"
        />
      </G>
    </Svg>
  )
}

export default IconPlus

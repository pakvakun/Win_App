import React, {useState, createRef, useEffect} from 'react';
import {View, KeyboardAvoidingView, Dimensions} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {Colors} from '../../src/Themes';
import {connect} from 'react-redux';
import {Styles} from './Styles/SendCodeScreenStyle';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {UserSendCode, ClearError} from '../../Redux/actions/AuthActions';
import IconError from '../../src/assets/icons/IconError';

const pinInput = createRef();
const timerDelay = 60;

const SendCodeScreen = (props) => {
  const {route} = props;
  const {authPhone, error} = props;
  const [code, setCode] = useState();
  const [timer, setTimer] = useState(timerDelay);

  const _checkCode = () => {
    props.dispatch(UserSendCode(authPhone, code));
  };

  const _setCode = (e) => {
    if (error) {
      props.dispatch(ClearError());
    }
    setCode(e);
  };

  const startTimer = () => {
    var interval = setInterval(() => {
      setTimer((p) => {
        if (p === 0) {
          clearInterval(interval);
          setTimer(timerDelay);
        } else {
          return p - 1;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    alert(props.codeSend)
    // if (route.params.initScreen) {
    //   props.navigation.navigate(route.params.initScreen);
    // } else {
    //   props.navigation.navigate('CompleteLoginScreen');
    // }
  }, []);
  console.log(props);
  return (
    <KeyboardAvoidingView
      style={[Styles.flex, Styles.container]}
      behavior="padding">
      <View>
        <TextComponent
          font={'Oswald'}
          color={Colors.black}
          size={25}
          weight="Bold"
          lineHeight={50}
          style={Styles.title}>
          Введите код из смс
        </TextComponent>
        <TextComponent color={Colors.grey} style={Styles.subtitle}>
          Код был отправлен на {authPhone}
        </TextComponent>
      </View>
      <View style={{marginTop: 52}}>
        <SmoothPinCodeInput
          autoFocus={true}
          ref={pinInput}
          value={code}
          onTextChange={_setCode}
          onFulfill={_checkCode}
          cellStyle={[Styles.cell, error && Styles.borderError]}
          cellStyleFocused={Styles.cellFocused}
          cellSpacing={22}
          cellSize={Dimensions.get('screen').width * 0.16}
        />
        {error && (
          <View style={Styles.error}>
            <IconError />
            <TextComponent
              size={12}
              lineHeight={19}
              color={Colors.red}
              style={Styles.errorText}>
              {error}
            </TextComponent>
          </View>
        )}
      </View>
      <View style={Styles.repeat}>
        <TextComponent
          color={timer !== timerDelay ? Colors.grey : '#286BC8'}
          size={14}
          weight="Bold"
          lineHeight={19}
          style={Styles.repeatText}
          onPress={timer !== timerDelay ? null : startTimer}>
          Отправить код заново
        </TextComponent>
        {timer !== timerDelay && (
          <TextComponent color={Colors.grey} lineHeight={19} size={14}>
            {timer} сек
          </TextComponent>
        )}
      </View>
      <View />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => ({
  authPhone: state.auth.userAuthPhone,
  error: state.auth.error,
  codeSend: state.auth.isCodeCorrect,
});

export default connect(mapStateToProps)(SendCodeScreen);

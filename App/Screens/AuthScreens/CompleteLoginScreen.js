import React, {useState, createRef, useEffect} from 'react';
import {View, KeyboardAvoidingView, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import TextInputMask from 'react-native-text-input-mask';
import Button from '../../Components/Button';
import {TextComponent} from '../../Components/TextComponent';
import {DismissKeyboardView} from '../../Components/DismissKeyboardView';
import {UserSendPhone} from '../../Redux/actions/AuthActions';
import {UserConfirmPhone} from '../../Redux/actions/AppActions';
import FlagRussiaIcon from '../../src/assets/icons/flags/FlagRussiaIcon';
import {Colors} from '../../src/Themes';
import {Styles} from './Styles/CompleteLoginStyles';
import Input from '../../Components/Input';

const nameRef = createRef()
const passRef = createRef()
const confirmPassRef = createRef()

export const CompleteLoginScreen = (props) => {
    const {route} = props
    // useState(() => {
    //     props.navigation.replace('AppStack', 'AuthStack');
    // })
    const getStarted = () => {
      props.navigation.replace('AppStack', 'AuthStack');
    };

    return (
        <DismissKeyboardView style={Styles.container}>
        <StatusBar animated={false} barStyle="dark-content" />
          <KeyboardAvoidingView style={{flex: 1}} behavior="height">
              <View style={Styles.contentContainer}>
              <TextComponent
                  font={'Oswald'}
                  color={Colors.black}
                  size={25}
                  weight="Bold"
                  lineHeight={30}
                  style={Styles.title}>
                    Напишите имя и придумайте пароль
              </TextComponent>
              <TextComponent color={Colors.grey} style={Styles.subtitle} lineHeight={19}>
                Вы можете изменить все в любое время
              </TextComponent>
              <Input label="Имя" placeholder="Введите имя" ref={nameRef} />
              <Input label="Пароль" placeholder="Введите пароль" ref={passRef} secureTextEntry/>
              <Input label="Подтвердить пароль" placeholder="Введите пароль" ref={confirmPassRef} secureTextEntry />
              <View style={Styles.button}>
                  <Button handler={getStarted}>Начать пользоваться Win</Button>
              </View>
              {/* <TextComponent color={Colors.grey}>Или с помощью соц.сетей</TextComponent> */}
              <View />
              </View>
          </KeyboardAvoidingView>
        </DismissKeyboardView>
    );
};

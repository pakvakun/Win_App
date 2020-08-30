import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextComponent} from '../../../Components/TextComponent';
import {Colors} from '../../../src/Themes';
import IconNext from '../../../src/assets/icons/IconNext';
import IconMoon from '../../../src/assets/icons/IconMoon';
import Block from '../../../Components/Block';
import Button from '../../../Components/Button';
import UserDetails from '../../../Components/UserDetails';
import {connect} from 'react-redux';
import TextRow from '../../../Components/TextRow';
import IconInfo from '../../../src/assets/icons/IconInfo';
import IconPlus from '../../../src/assets/icons/IconPlus';
import { setUserRole } from '../../../Redux/actions/AppActions';

const roles = ['Участник', 'Тренер'];

const ProfileScreen = (props) => {
  const {navigation} = props

  useEffect(() => {
    props.navigation.setParams({
      leftComponent: (
        <TouchableOpacity onPress={onChangeRole}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextComponent color={Colors.black}>Я - {props.isTeacher ? 'тренер' : 'участник'}</TextComponent>
            <IconNext style={{marginLeft: 4.7, marginTop: 3}} />
          </View>
        </TouchableOpacity>
      ),
      rightComponent: (
        <TouchableOpacity>
          <IconMoon />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation, props.isTeacher]);

  const getModalContent = () => <View style={{width: '100%', paddingHorizontal: 20, paddingBottom: 24}}>
    {roleView(roles[0], !props.isTeacher)}
    {
      props.isTeacherActivated
        ? roleView(roles[1], props.isTeacher)
        : roleView()
    }
  </View>

  const roleView = (role, isActive) => {
    if (role) {
      return <TouchableOpacity onPress={setRole}>
        <UserDetails name={props.userName} text={role} photoSize={49} nameTextProps={{weight: 'Medium', size: 14}} textProps={{weight: 'Regular', size: 12}} containerStyle={{width: '100%', marginTop: 21}} >
          <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: isActive ? Colors.blue : null, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', borderWidth: isActive ? 0 : 2, borderColor: isActive ? null : Colors.borderGrey}}>
            <View style={{width: 6, height: 6, borderRadius: 6, backgroundColor: Colors.white}} />
          </View>
        </UserDetails>
      </TouchableOpacity>
    } else {
      return <TouchableOpacity style={{width: '100%', flexDirection: 'row', marginTop: 21, alignItems: 'center'}} onPress={() => navigation.navigate('MainSettingsScreen', {teacherActivated: true})}>
        <View style={{width: 49, height: 49, borderColor: Colors.borderGrey, borderWidth: 2, borderRadius: 49,  borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center'}}>
          <IconPlus />
        </View>
        <TextComponent color={Colors.black} size={14} weight="Medium" style={{paddingLeft: 15}}>Стать тренером</TextComponent>
        <View style={{width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', borderWidth: 2, borderColor: Colors.borderGrey}}>
          <View style={{width: 6, height: 6, borderRadius: 6, backgroundColor: Colors.white}} />
        </View>
      </TouchableOpacity>
    }
  }
  const settingsPress = () => {
    navigation.navigate('SettingsScreen');
  };

  const onChangeRole = () => {
    navigation.push('Modal', {...modalConfig})
  }

  const setRole = () => {
    props.dispatch(setUserRole(!props.isTeacher))
    navigation.popToTop()
  }

  const modalConfig = {
    title: 'Профиля',
    content: getModalContent()
  }

  return (
    <View style={{flex: 1}}>
      <Block>
        <UserDetails name={props.userName} text={props.userText} />
        <Button
          style={{marginVertical: 23.2}}
          colors={['rgba(40, 107, 200, .08)', 'rgba(40, 107, 200, .08)']}
          handler={settingsPress}>
          <TextComponent color={Colors.blue}>Настройки</TextComponent>
        </Button>
      </Block>
      <Block style={{paddingHorizontal: 20, paddingTop: 17, flex: 1, marginBottom: 0}}>
        <TextComponent
          color={Colors.grey}
          size={11}
          lineHeight={20}
          weight="Bold">
          Прочее
        </TextComponent>
        <TextRow
          icon={<IconInfo />}
          text="Условия оферты"
          targetRoute="CommonInfoScreen"
          routeParams={{title: 'Условия оферты'}}
          style={{marginTop: 19}}
          navigation={props.navigation}
        />
      </Block>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userName: state.app?.userName,
  userText: state.app?.userText,
  isTeacher: state.app.isTeacher,
  isTeacherActivated: state.app?.isTeacherActivated
});

export default connect(mapStateToProps)(ProfileScreen);

import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Block from '../../../Components/Block';
import TextRow from '../../../Components/TextRow';
import IconBell from '../../../src/assets/icons/IconBell';
import IconUser from '../../../src/assets/icons/IconUser';
import {Colors} from '../../../src/Themes';
import IconLogout from '../../../src/assets/icons/IconLogout';
import IconClose from '../../../src/assets/icons/IconClose';

const SettingsScreen = (props) => {
  useEffect(() => {
    props.navigation.setParams({
      iconBack: <IconClose />,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <Block style={{paddingTop: 28.5, paddingBottom: 33}}>
        <TextRow
          icon={<IconUser />}
          text="Основное"
          textColor={Colors.black}
          targetRoute="MainSettingsScreen"
          navigation={props.navigation}
        />
        <TextRow
          icon={<IconBell />}
          text="Push-уведомления"
          textColor={Colors.black}
          style={{marginTop: 29}}
          targetRoute="PushSettingsScreen"
          navigation={props.navigation}
        />
      </Block>
      <Block style={{flex: 1, marginBottom: 0, paddingTop: 21}}>
        <TextRow
          icon={<IconLogout />}
          text="Выход"
          textColor={Colors.black}
          withoutArrow
        />
      </Block>
    </View>
  );
};

export default SettingsScreen;

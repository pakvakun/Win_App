import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconClose from '../../../src/assets/icons/IconClose';
import IconCheck from '../../../src/assets/icons/IconCheck';
import {Colors} from '../../../src/Themes';
import {TextComponent} from '../../../Components/TextComponent';
import Switcher from '../../../Components/Switcher';

const PushSettingsScreen = (props) => {
  const {navigation} = props;

  useEffect(() => {
    navigation.setParams({
      iconBack: <IconClose />,
      rightComponent: (
        <TouchableOpacity onPress={saveProfile}>
          <IconCheck />
        </TouchableOpacity>
      ),
    });
  }, []);

  const saveProfile = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20, paddingTop: 32}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TextComponent color={Colors.black} size={14} lineHeight={19}>
          Получать Push-уведомления
        </TextComponent>
        <Switcher />
      </View>
    </View>
  );
};

export default PushSettingsScreen;

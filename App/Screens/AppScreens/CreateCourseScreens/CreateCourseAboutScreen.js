import React, {useEffect} from 'react';
import {TouchableOpacity, View, Image, Dimensions, ScrollView} from 'react-native';
import {TextComponent} from '../../../Components/TextComponent';
import BottomButton from '../../../Components/BottomButton';
import {connect} from 'react-redux';
import {Colors} from '../../../src/Themes';
import IconArrow from '../../../src/assets/icons/IconArrow';
import Input from '../../../Components/Input';
import { hexToRGBA } from '../../../src/Common/helpers';

const CreateCourseAboutScreen = ({navigation, dispatch}) => {
  useEffect(() => {
    navigation.setParams({
      iconBack: <IconArrow />,
      rightComponent: (
        <TouchableOpacity onPress={inDraft}>
          <TextComponent color={Colors.grey3}>В черновик</TextComponent>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const inDraft = () => {
    // dispatch();
    navigation.navigate('List', {action: navigation.popToTop()})
  };

  const onSubmit = () => {
    navigation.navigate('CreateCourseTrainingScreen');
  };
  return (
    <View style={{flex: 1, paddingBottom: 0, position: 'relative'}}>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity style={{width: '18.6%', height: Dimensions.get('screen').height * .055, position: 'absolute', right: 36, top: 30, borderRadius: 5, zIndex: 2, overflow: 'hidden'}} onPress={navigation.goBack}>
          <View style={{backgroundColor: hexToRGBA(Colors.black, .16), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, zIndex: 2}}/>
          <Image source={{uri: ''}} style={{width: '100%', height: '100%', backgroundColor: Colors.lightGrey}}  />
        </TouchableOpacity>
        <Input 
          label='Название курса'
          placeholder='Название курса'
          multiline
          inputStyle={{paddingRight: '50%'}}
        />
        <Input 
          label='Теги'
          placeholder='Введите тэг'
        />
        <Input 
          label='Описание курса'
          placeholder='Опишите курс'
          multiline
        />
        <Input 
          label='Цена курса'
          placeholder='1200'
          keyboardType='numeric'
        />
        <TextComponent color={Colors.grey3} size={12} style={{marginTop: 11.5, textAlign: 'center'}}>
          Учтите, что сервис снимает 20% от одной покупки курса
        </TextComponent>
      </ScrollView>
      <BottomButton handler={onSubmit}>Далее</BottomButton>
  </View>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(CreateCourseAboutScreen);

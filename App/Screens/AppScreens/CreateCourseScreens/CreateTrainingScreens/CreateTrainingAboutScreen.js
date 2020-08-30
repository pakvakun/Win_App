import React, {useEffect} from 'react';
import {TouchableOpacity, View, Image, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {TextComponent} from '../../../../Components/TextComponent';
import BottomButton from '../../../../Components/BottomButton';
import {Colors} from '../../../../src/Themes';
import IconArrow from '../../../../src/assets/icons/IconArrow';
import Input from '../../../../Components/Input';
import { hexToRGBA } from '../../../../src/Common/helpers';

const CreateTrainingAboutScreen = ({navigation, dispatch}) => {
  useEffect(() => {
    navigation.setParams({
      iconBack: <IconArrow />,
      rightComponent: (
        <TouchableOpacity onPress={addTraining}>
          <TextComponent color={Colors.blue}>Добавить</TextComponent>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const addTraining = () => {
    // dispatch();
    navigation.pop(2);
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
          label='Название видео тренировки'
          placeholder='Название'
          multiline
          inputStyle={{paddingRight: '50%'}}
        />
        <Input 
          label='Описание тренировки'
          placeholder='Не заполнено'
          multiline
        />
      </ScrollView>
  </View>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(CreateTrainingAboutScreen);

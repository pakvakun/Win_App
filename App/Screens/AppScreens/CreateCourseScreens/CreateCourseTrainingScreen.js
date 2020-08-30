import React, {useEffect, createRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextComponent} from '../../../Components/TextComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomButton from '../../../Components/BottomButton';
import IconClose from '../../../src/assets/icons/IconClose';
import {connect} from 'react-redux';
import {Colors} from '../../../src/Themes';
import IconArrow from '../../../src/assets/icons/IconArrow';
import IconGym from '../../../src/assets/icons/IconGum';
import Button from '../../../Components/Button';
import ModalComponent from '../../../Components/ModalComponent';
import Input from '../../../Components/Input';
import { useRoute } from '@react-navigation/native';
import { get } from 'lodash';



const CreateCourseTrainingScreen = ({navigation, dispatch}) => {
  const nameRef = createRef()
  const aboutRef = createRef()
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
    console.log(nameRef.current, aboutRef.current);
    const title = get(nameRef.current, 'props.value', 'название тренировки')
    const description = get(aboutRef.current, 'props.value', 'описание тренировки')
    navigation.navigate('CreateTrainingScreen', {title, description})
  };

  const showModal = () => {
    navigation.push('Modal', {...modalConfig});
  };

  const modalContent = () => (
    <View style={{paddingBottom: 86 + 54}}>
      <Input label="Название" placeholder="Введите название" ref={nameRef} />
      <Input label="Описание раздела" placeholder="Не заполнено" ref={aboutRef} />
      <BottomButton style={{position: 'relative'}} handler={onSubmit}>
        Добавить
      </BottomButton>
    </View>
  );

  
  const modalConfig = {
    title: 'Добавление раздела',
    content: modalContent()
  };

  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white}}>
      <View style={{paddingHorizontal: 41, justifyContent: 'center', alignItems: 'center',}}>
        <IconGym />
        <TextComponent color={Colors.black} size={25} weight='Medium' style={{marginTop: 15.5}}>Тренировки курса</TextComponent>
        <TextComponent color={Colors.grey4} size={14} lineHeight={20} style={{marginTop: 14, textAlign: 'center'}}>Нажмите добавить, чтобы начать работу с созданием тренировки</TextComponent>
        <View style={{minWidth: '52%', marginTop: 28.5}}>
          <Button handler={showModal}>
            Добавить
          </Button>
        </View>
      </View>
      <BottomButton disabled handler={onSubmit} colors={[Colors.darkGrey, Colors.darkGrey]}>Добавьте сначала тренировки курса</BottomButton>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(CreateCourseTrainingScreen);

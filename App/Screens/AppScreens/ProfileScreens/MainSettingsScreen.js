import React, {useEffect, createRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import IconClose from '../../../src/assets/icons/IconClose';
import IconCheck from '../../../src/assets/icons/IconCheck';
import {Colors} from '../../../src/Themes';
import IconPencil from '../../../src/assets/icons/IconPencil';
import {TextComponent} from '../../../Components/TextComponent';
import Input from '../../../Components/Input';
import Separator from '../../../Components/Separator';
import Button from '../../../Components/Button';
import BottomButton from '../../../Components/BottomButton';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const MainSettingsScreen = (props) => {
  const {navigation, route: {params}} = props;
  const nameRef = createRef();
  const surnameRef = createRef();
  const phoneRef = createRef();
  const sexRef = createRef();
  const bdateRef = createRef();
  const cityRef = createRef();
  const aboutRef = createRef();

  const [avatar, setAvatar] = useState()

  useEffect(() => {
    navigation.setParams({
      iconBack: <IconClose />,
      rightComponent: params.teacherActivated
        ? null
        : (
          <TouchableOpacity onPress={saveProfile}>
            <IconCheck />
          </TouchableOpacity>
        ),
    });
    navigation.dangerouslyGetParent().setParams({
      tabBarVisible: false
    })
  }, []);

  const saveProfile = () => {
    console.log(nameRef.current?.props.value);
    console.log(surnameRef.current?.props.value);
    console.log(phoneRef.current?.props.value);
    console.log(sexRef.current?.props.value);
    console.log(bdateRef.current?.props.value);
    console.log(cityRef.current?.props.value);
    navigation.goBack();
  };

  const selectPhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        setAvatar(source)
      }
    });
  }

  const getTeacherActivatedContent = () => {
    return <View style={{width: '100%', marginTop: 47}}>
      <Separator height={7} />
      <View style={{paddingTop: 26, paddingHorizontal: 44.5}}>
        <TextComponent color={Colors.black} size={17} weight='Bold'>Опыт работы</TextComponent>
        <TextComponent
            color={Colors.grey}
            size={12}
            weight="Bold"
            lineHeight={16}
            style={{marginTop: 21}}>
              Места работы
        </TextComponent>
        <Button
          style={{marginTop: 8}}
          colors={['rgba(40, 107, 200, .08)', 'rgba(40, 107, 200, .08)']}
          handler={addWork}>
          <TextComponent color={Colors.blue}>Добавить место работы</TextComponent>
        </Button>
        <Input
          label="О себе"
          placeholder="Расскажите о себе"
          ref={aboutRef}
          targetNavigate="AboutMeScreen"
          navigation={navigation}
          containerStyle={{marginTop: 28, paddingHorizontal: 0}}
        />
      </View>
    </View>
  }

  const addWork = () => {

  }

  const allFieldsIsCorrect = true

  return (
    <>
    <ScrollView style={{flex: 1, width: '100%', backgroundColor: Colors.white}}>
      <View style={{flex: 1, alignItems: 'center', paddingBottom: 90}}>
        <TouchableOpacity
          style={{
            position: 'relative',
            width: 120,
            marginTop: 35,
            marginBottom: 30,
          }}
          onPress={selectPhoto}>
          <Image
            source={{uri: props.userPhoto || avatar || ''}}
            style={{
              width: 120,
              height: 120,
              backgroundColor: Colors.grey,
              borderRadius: 120,
            }}
          />
          <View
            style={{
              width: 29,
              height: 29,
              backgroundColor: Colors.darkGrey,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 29,
              borderWidth: 2,
              borderColor: Colors.white,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
            <IconPencil />
          </View>
        </TouchableOpacity>
        <Input label="Имя" placeholder="Введите имя" ref={nameRef} />
        <Input label="Фамилия" placeholder="Введите фамилию" ref={surnameRef} />
        <Input
          label="Телефон"
          placeholder="Введите телефон"
          ref={phoneRef}
          targetNavigate="LoginScreen"
          targetStack="AuthStack"
          targetNavigateParams={{initScreen: 'MainSettingsScreen'}}
          navigation={navigation}
        />
        <Input
          label="Пол"
          placeholder="Введите пол"
          ref={sexRef}
          targetNavigate=" "
          targetNavigateParams={{initScreen: 'MainSettingsScreen'}}
          navigation={navigation}
        />
        <Input
          label="Дата рождения"
          placeholder="Введите день рождения"
          ref={bdateRef}
          date
        />
        <Input
          label="Город"
          placeholder="Введите город"
          ref={cityRef}
          targetNavigate=" "
          targetNavigateParams={{initScreen: 'MainSettingsScreen'}}
          navigation={navigation}
        />
        {/* <View style={{width: '100%', paddingHorizontal: 36, marginTop: 30.5}}>
          <TextComponent
            color={Colors.grey}
            size={12}
            weight="Bold"
            lineHeight={16}>
            Соц. сети
          </TextComponent>
        </View> */}
        {
          params.teacherActivated
            ? getTeacherActivatedContent()
            : null
        }
      </View>
    </ScrollView>
    {
      params.teacherActivated &&
        <BottomButton disabled={allFieldsIsCorrect ? false : true} colors={allFieldsIsCorrect ? null : [Colors.darkGrey, Colors.darkGrey]}>
          {allFieldsIsCorrect ? 'Отправить на модерацию' : 'Заполните все поля'}
        </BottomButton>
    }
    </>
  );
};

export default MainSettingsScreen;

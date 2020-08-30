import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { TextComponent } from '../../../Components/TextComponent';
import IconArrow from '../../../src/assets/icons/IconArrow';
import { Colors } from '../../../src/Themes';
import IconDots from '../../../src/assets/icons/IconDots';
import Separator from '../../../Components/Separator';
import Button from '../../../Components/Button';
import { size } from 'lodash';
import UserDetails from '../../../Components/UserDetails';
import moment from 'moment';
import { connect } from 'react-redux';
import { Styles } from './Styles/CreateTrainingScreenStyle';

const {width} = Dimensions.get('screen');

const CreateTrainingScreen = (props) => {
    const {navigation, route, myTrainings} = props;
    const {title, description} = route.params;
    useEffect(() => {
        navigation.setParams({
          iconBack: <IconArrow />,
          rightComponent: (
            <TouchableOpacity onPress={change} hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                <IconDots />
            </TouchableOpacity>
          ),
          title
        });
      }, [navigation]);
    
    // убрать нахрен
    const [view, changeView] = useState(true);
    const change = () => {
      changeView((value) => !value);
    };
    // top 
    const addTraining = () => {
        navigation.navigate('CreateTrainingVideoScreen');
    };

    const handlePressTraining = (training) => {
        navigation.push('TrainingScreen');
    };
    
    // revert in prod
    // const isEmptyList = size(myTrainings) === 0 
    const isEmptyList = view;
    return (
        <View style={{flex: 1, backgroundColor: Colors.white}}>
          <View style={{paddingTop: 20.5, paddingBottom: 16, paddingHorizontal: 35}}>
            <TextComponent color={Colors.black} size={14} lineHeight={20} letterSpacing={1}>{description}</TextComponent>
          </View>
            <Separator height={7} color={Colors.grey7} />
            <View style={isEmptyList ? Styles.trainingsContainerEmty : Styles.trainingsContainer}>
            {
              isEmptyList
                ?   <>
                      <TextComponent size={25} weight='Medium' color={Colors.black}>Видео-тренировки</TextComponent>
                      <TextComponent size={14} color={Colors.grey4} style={{marginTop: 14, textAlign: 'center'}}>Нажмите добавить,  чтобы начать работу с созданием тренировки</TextComponent>
                      <View style={{width: width * 0.666, marginTop: 28.5}}>
                          <Button handler={addTraining}>
                              Добавить видео-тренировку
                          </Button>
                      </View>
                    </>
                :   myTrainings.map((item, key) => (
                    <TouchableOpacity
                    onPress={() => handlePressTraining(myTrainings)}
                    key={key}>
                    <UserDetails
                      containerStyle={{marginTop: 17}}
                      photoSize={53}
                      photoBorderRadius={5}
                      name={item.name}
                      text={moment(item.duration).format('hh:MM')}
                      textProps={{
                        size: 12,
                        color: Colors.grey2,
                        weight: 'Regular',
                        lineHeight: 39,
                      }}
                      nameTextProps={{
                        size: 14,
                        color: Colors.black,
                        weight: 'Medium',
                        lineHeight: 29,
                      }}
                    />
                    </TouchableOpacity>
                ))
            }
            {
              isEmptyList
                ? null
                : <View style={{width: 50, height: 50, position: 'absolute', bottom: 36, right: 22}}>
                    <Button buttonStyle={{paddingVertical: 0, height: '100%', justifyContent: 'center', alignItems: 'center'}} handler={addTraining}>+</Button>
                  </View>
                
            }
            </View>
        </View>
    );
};

const mapStateToProps = state => ({
    myTrainings: [
        {name: 'video name', duration: new Date()},
        {name: 'video name', duration: new Date()},
        {name: 'video name', duration: new Date()},
    ]
});
export default connect(mapStateToProps)(CreateTrainingScreen);

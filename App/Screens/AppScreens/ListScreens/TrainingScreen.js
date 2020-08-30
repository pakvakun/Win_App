import React, {useEffect} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Block from '../../../Components/Block';
import {TextComponent} from '../../../Components/TextComponent';
import {Colors} from '../../../src/Themes';
import UserDetails from '../../../Components/UserDetails';
import moment from 'moment';
import {connect} from 'react-redux';
import Switcher from '../../../Components/Switcher';
import {Styles} from '../Styles/TrainingStyle';
import {hideTabBar, showTabBar} from '../../../src/Common/helpers';
import { getCourseTraining } from '../../../Redux/actions/AppActions';
import { get } from 'lodash';

const TrainingScreen = (props) => {
  const {courseVideo} = props;

  useEffect(() => {
    props.navigation.addListener('focus', () => hideTabBar(props));
    props.navigation.addListener('blur', () => showTabBar(props));
    console.log(props);
    props.dispatch(getCourseTraining(get(props.navigation.state, 'params.training.id', null)))
  }, []);

  const renderTraining = (data, name) => {
    return (
      data && (
        <View style={{marginTop: 29}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextComponent
              color={Colors.grey}
              size={11}
              weight={'Bold'}
              lineHeight={20}>
              {name}
            </TextComponent>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextComponent
                color={Colors.grey}
                size={12}
                weight={'Medium'}
                lineHeight={16}
                style={{paddingRight: 12}}>
                {'Автопроизведение'}
              </TextComponent>
              <Switcher />
            </View>
          </View>
          {data.map((item, key) => (
            <TouchableOpacity
              onPress={() => handlePressTraining(data)}
              key={key}>
              <UserDetails
                containerStyle={Styles.userDetailsContainer}
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
                  color: Colors.grey2,
                  weight: 'Medium',
                  lineHeight: 29,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      )
    );
  };

  const handlePressTraining = (training) => {
    props.navigation.push('TrainingScreen', {training});
  };

  return (
    <View style={Styles.flexOne}>
      <ScrollView style={Styles.flexOne}>
        <Image source={{uri: props.photo}} style={Styles.video} />
        <View style={Styles}>
          <Block style={Styles.block}>
            <TextComponent
              color={Colors.black}
              size={20}
              weight={'Bold'}
              font={'Oswald'}
              lineHeight={22}>
              {courseVideo.courseName}
            </TextComponent>
            <TextComponent
              color={Colors.black}
              lineHeight={20}
              style={Styles.aboutText}>
              {courseVideo.aboutCourse}
            </TextComponent>
          </Block>
          <Block>
            {courseVideo?.next &&
              renderTraining(courseVideo.next, 'Следующее'.toUpperCase())}
          </Block>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  courseVideo: {
    next: [
      {name: 'video name', duration: new Date()},
      {name: 'video name', duration: new Date()},
      {name: 'video name', duration: new Date()},
    ],
    courseName: 'qweqweqwe',
    aboutCourse:
      'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации соответствующий условий активизации. Товарищи! укрепление и развитие структуры играет важную роль в формировании модели развития. Значимость этих проблем настолько очевидна, ',
  },
});
export default connect(mapStateToProps)(TrainingScreen);

import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Block from '../../../Components/Block';
import {TextComponent} from '../../../Components/TextComponent';
import {Colors} from '../../../src/Themes';
import UserDetails from '../../../Components/UserDetails';
import {connect} from 'react-redux';
import moment from 'moment';
import {Styles} from '../Styles/CourseScreenStyle';
import IconInfo from '../../../src/assets/icons/IconInfo';
import {showTabBar, hideTabBar, getFullCoursesCountString} from '../../../src/Common/helpers';
import Button from '../../../Components/Button';
import { getCourse } from '../../../Redux/actions/AppActions';
import { get, map } from 'lodash';

const CourseScreen = (props) => {
  const courseVideo = props.courseInfo?.courseVideo;

  const {price, courseName, userName, photo, id} = props.route?.params?.item;
  const [isFullText, setIsFullText] = useState(false);
  useEffect(() => {
    props.navigation.addListener('focus', () => hideTabBar(props));
    props.navigation.addListener('blur', () => showTabBar(props));
    props.dispatch(getCourse(id))
  }, []);

  const renderTraining = (data, name) => {
    return (
      data && (
        <View style={Styles.trainingContainer}>
          <View style={Styles.titleBlock}>
            <TextComponent
              color={Colors.black}
              size={17}
              weight={'Bold'}
              lineHeight={20}>
              {name}
            </TextComponent>
            <TouchableOpacity
              onPress={() => handleInfoTrainingPress(data)}
              style={Styles.iconContainer}>
              <View style={Styles.icon}>
                <IconInfo />
              </View>
              <TextComponent color={Colors.blue}>Инфо</TextComponent>
            </TouchableOpacity>
          </View>
          {data.tasks.map((item, key) => (
            <TouchableOpacity
              onPress={() => handlePressTraining(data)}
              key={key}>
              <UserDetails
                containerStyle={Styles.userDetailsContainer}
                photoSize={53}
                photoBorderRadius={5}
                name={item.name}
                text={item.duration}
                videoUri={item.video}
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

  const renderGroup = (group, key) => {
    console.log(group);
    return renderTraining(group, group.name)
  }

  const handlePressTraining = (training) => {
    props.navigation.navigate('TrainingScreen', training);
  };

  const handleInfoTrainingPress = (data) => {
    const modalConfig = {
      title: data.name,
      content: modalContent(data)
    };
    props.navigation.push('Modal', {...modalConfig})
  }

  const modalContent = (data) => <ScrollView>
    <View style={{paddingHorizontal: 38.5, paddingTop: 24, paddingBottom: 30}}>
      <TextComponent color={Colors.black} size={14} lineHeight={20}>{data.about}</TextComponent>
      {
        data.target
          ? <View style={{marginTop: 18}}>
              <TextComponent color={Colors.black} size={14} lineHeight={20} weight='Bold'>Цель:</TextComponent>
              <TextComponent color={Colors.black} size={14} lineHeight={20}>{data.target}</TextComponent>
            </View>
          : null
      }
      {
        data.experience
          ? <View style={{marginTop: 18}}>
              <TextComponent color={Colors.black} size={14} lineHeight={20} weight='Bold'>Необходимые знания::</TextComponent>
              <TextComponent color={Colors.black} size={14} lineHeight={20}>{data.experience}</TextComponent>
            </View>
          : null
      }
    </View>
  </ScrollView>

  return (
    <>
      <View style={Styles.container}>
        <Image source={{uri: get(props.courseInfo, 'image', '')}} style={Styles.image} />
        <ScrollView style={Styles.courseMainScroll} showsVerticalScrollIndicator={false}>
          <View style={Styles.courseContentContainer}>
            <Block style={Styles.blockNameCourse}>
              <TextComponent
                color={Colors.black}
                size={25}
                weight={'Bold'}
                font={'Oswald'}
                lineHeight={29}>
                {get(props.courseInfo, 'title', '').toUpperCase()}
              </TextComponent>
              <TextComponent
                color={Colors.grey}
                lineHeight={20}
                style={Styles.hashtag}>
                {get(props.courseInfo, 'hashTags', []).join(' ')}
              </TextComponent>
              <UserDetails
                photoSize={40}
                name={get(props.courseInfo, 'authorName', ' Автор').toUpperCase()}
                text={getFullCoursesCountString(get(props.courseInfo, 'courseCount', ''))}
                photoUri={get(props.courseInfo, 'authorAvatar', '')}
                textProps={{
                  size: 11,
                  color: Colors.grey,
                  weight: 'Regular',
                  lineHeight: 20,
                }}
                nameTextProps={{
                  size: 11,
                  color: Colors.black,
                  weight: 'Bold',
                  lineHeight: 20,
                }}
                textContainerStyle={{marginLeft: 12}}
              />
            </Block>
            <Block style={Styles.blockAboutCourse}>
              <TextComponent
                color={Colors.black}
                size={17}
                weight={'Bold'}
                lineHeight={20}>
                О курсе
              </TextComponent>
              <TouchableOpacity onPress={() => setIsFullText((prev) => !prev)}>
                <TextComponent
                  size={14}
                  lineHeight={20}
                  color={Colors.black}
                  numberOfLines={isFullText ? 0 : 4}
                  style={Styles.aboutText}>
                  {get(props.courseInfo, 'courseAbout', '')}
                </TextComponent>
              </TouchableOpacity>
            </Block>
            <Block>
              {
                map(get(props.courseInfo, 'groups', []), renderGroup)
              }
            </Block>
          </View>
          <View style={Styles.bottomCrutch} />
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 86,
          backgroundColor: Colors.white,
          borderTopColor: Colors.borderGrey,
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 37,
          paddingTop: 15.6
        }}>
        <View>
          <TextComponent color={Colors.grey2}>Стоимость:</TextComponent>
          <TextComponent color={Colors.black}>{get(props.courseInfo, 'price', 0)} руб.</TextComponent>
        </View>
        <View style={{width: 135, height: 44}}>
          <Button>Купить</Button>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  courseInfo: state.app.course?.course
  // {
  //   courseName: 'Тренировка по боксу для начинающих',
  //   courseHashTags: '#hashTag #hashTag',
  //   userName: 'Евгений Ситников',
  //   courseCountText: '2 курса',
  //   aboutCourse:
  //     'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации соответствующий условий активизации. Товарищи! укрепление и развитие структуры играет важную роль в формировании модели развития.',
  //   courseVideo: {
  //     beforereTraining: [
  //       {name: 'video name', duration: new Date()},
  //       {name: 'video name', duration: new Date()},
  //       {name: 'video name', duration: new Date()},
  //     ],
  //     training: [
  //       {name: 'video name', duration: new Date()},
  //       {name: 'video name', duration: new Date()},
  //     ],
  //     afterTraining: [
  //       {name: 'video name', duration: new Date()},
  //       {name: 'video name', duration: new Date()},
  //       {name: 'video name', duration: new Date()},
  //       {name: 'video name', duration: new Date()},
  //     ],
  //   },
  // },
});
export default connect(mapStateToProps)(CourseScreen);

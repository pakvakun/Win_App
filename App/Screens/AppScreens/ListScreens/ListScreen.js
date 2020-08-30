import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../src/Themes';
import {TextComponent} from '../../../Components/TextComponent';
import UserDetails from '../../../Components/UserDetails';
import SearchBar from '../../../Components/SearchBar';
import {Styles} from '../Styles/ListStyle';
import {getCoursesList} from '../../../Redux/actions/AppActions';
import {baseUrl} from '../../../src/Config';
import { get } from 'lodash';


const ListScreen = (props) => {
  useEffect(() => {
    props.navigation.setParams({
      leftComponent: <SearchBar />,
      headerLeftContainerStyle: {
        backgroundColor: Colors.white,
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
      },
    });
    console.log(props);
  }, []);

  useEffect(() => {
    props.dispatch(getCoursesList());
  }, [props.navigation]);

  const handlePressCourse = (item) => {
    props.navigation.navigate('CourseScreen', {item});
  };

  const renderCourse = ({item}) => (
    <TouchableOpacity
      style={Styles.courseContainer}
      onPress={() => handlePressCourse(item)}>
      <View style={Styles.imageContainer}>
        <Image
          source={{uri: item.img || ''}}
          style={Styles.image}
        />
        <View style={Styles.priceWrapper}>
          <TextComponent size={14} weight="Bold" lineHeight={29}>
            {item.price || 0} руб. стоимость курса
          </TextComponent>
        </View>
      </View>
      <UserDetails
        name={item.title}
        text={item.authorName}
        photoUri={item.authorAvatar}
        photoSize={43}
        containerStyle={Styles.userDetails}
        nameTextProps={{
          size: 20,
          weight: 'Bold',
          font: 'Oswald',
          lineHeight: 22,
        }}
        textProps={{
          size: 13,
          lineHeight: 29,
          weight: 'Regular',
          color: Colors.grey1,
        }}
      />
    </TouchableOpacity>
  );

  const renderFilters = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {props.filters.map((item, key) => (
        <TextComponent color={Colors.grey1} key={key} style={Styles.filter}>
          {`#${item}`}
        </TextComponent>
      ))}
    </ScrollView>
  );

  return (
    <View style={Styles.container}>
      <FlatList
        data={props.coursesList}
        renderItem={renderCourse}
        ListHeaderComponent={renderFilters}
        ListHeaderComponentStyle={Styles.header}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  coursesList: get(state.app, 'coursesList.course', []),
  // [
  //   {
  //     photo: null,
  //     price: 900,
  //     courseName: 'Тренировка по боксу для начинающих',
  //     userName: 'Евгений Ситников',
  //   },
  //   {
  //     photo: null,
  //     price: 900,
  //     courseName: 'Тренировка по боксу для начинающих',
  //     userName: 'Евгений Ситников',
  //   },
  // ],
  filters: ['Фильтр1', 'Фильтр2', 'Фильтр3'],
});

export default connect(mapStateToProps)(ListScreen);

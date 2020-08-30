import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import CameraRoll from '@react-native-community/cameraroll';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextComponent} from '../../../../Components/TextComponent';
import BottomButton from '../../../../Components/BottomButton';
import IconClose from '../../../../src/assets/icons/IconClose';
import {Colors} from '../../../../src/Themes';

import get from 'lodash/get';
import { map } from 'lodash';
import { Style } from '../Styles/CreateCourseMediaStyle';

const config = {
  first: 20,
  assetType: 'Photos',
};

const CreateTrainingVideoScreen = ({navigation, dispatch}) => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState('');

  useEffect(() => {
    navigation.setParams({
      iconBack: <IconClose />,
      rightComponent: (
        <TouchableOpacity onPress={onSubmit}>
          <TextComponent color={Colors.blue}>Далее</TextComponent>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    CameraRoll.getPhotos(config)
      .then((r) => {
        setMedia(map(r.edges, (i) => get(i, 'node.image')));
      })
      .catch((err) => {
        //Error Loading Images
      });
  }, [navigation]);

  const onSubmit = () => {
    navigation.navigate('CreateTrainingAboutScreen');
  };

  const handleSelectMedia = item => {
    setSelectedMedia(item.uri);
  };

  const renderMediaItem = ({item, index}) => {
    const selectMedia = () => handleSelectMedia(item);
    return (
      <TouchableOpacity onPress={selectMedia} delayPressIn={0} activeOpacity={.7}>
        <Image source={{uri: item.uri}} style={Style.otherImages}/>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {
        selectedMedia.length
          ? <View style={Style.firsImg}>
              <Image source={{uri: selectedMedia}} style={{width: '100%', aspectRatio: 1}} resizeMode='cover' />
            </View>
          : null
      }
      
      <View style={{flex: 1, paddingBottom: 86}}>
          <FlatList data={media} renderItem={renderMediaItem} numColumns={4} keyExtractor={(item) => item.uri}/>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps)(CreateTrainingVideoScreen);

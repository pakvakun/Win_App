import React, { createRef } from 'react';
import {View, Image} from 'react-native';
import {TextComponent} from './TextComponent';
import {Styles} from './Styles/UserDetailsStyles';
import {Colors} from '../src/Themes';
import Video from 'react-native-video';

const videoPlayer = createRef()

const UserDetails = ({
  name,
  text,
  photoUri,
  videoUri,
  photoSize,
  photoBorderRadius,
  containerStyle,
  textProps,
  nameTextProps,
  textContainerStyle,
  children
}) => {
  return (
    <View style={[Styles.container, containerStyle]}>
      <View
        style={[
          Styles.photoContainer,
          photoSize && {width: photoSize, height: photoSize},
          photoBorderRadius && {borderRadius: photoBorderRadius}
        ]}>
        {photoUri 
          ? <Image source={photoUri} style={Styles.image} />
          : videoUri
            ? <Video source={{uri: videoUri}}
                ref={videoPlayer}
                style={Styles.image} 
                resizeMode='cover'
                paused={true}
                muted={true} />
            : <View style={Styles.noPhotoContainer} />
        }
      </View>
      <View style={[Styles.textContainer, textContainerStyle]}>
        <TextComponent
          color={nameTextProps?.color || Colors.black}
          weight={nameTextProps?.weight || 'Bold'}
          size={nameTextProps?.size || 25}
          lineHeight={nameTextProps?.lineHeight || 28}
          font={nameTextProps?.font}>
          {name}
        </TextComponent>
        <TextComponent
          color={textProps?.color || Colors.grey}
          weight={textProps?.weight || 'Bold'}
          size={textProps?.size || 14}
          lineHeight={textProps?.lineHeight || 20}
          font={textProps?.font}>
          {text}
        </TextComponent>
      </View>
      {children}
    </View>
  );
};

export default UserDetails;

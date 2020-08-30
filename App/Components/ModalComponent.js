import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal';
import { Styles } from './Styles/ModalComponentStyles';
import { View, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../src/Themes';
import { TextComponent } from './TextComponent';
import Separator from './Separator';

const ModalComponent = (props) => {
    const {navigation, route: {params}} = props;

    const [modalVisible, setModalVisible] = useState(true);

    const onBackdropPress = () => {
        setModalVisible(false);
    };

    const goBack = () => {
        navigation.pop();
    };

    return (
        <ReactNativeModal isVisible={modalVisible} style={Styles.container} onBackdropPress={onBackdropPress} onModalHide={goBack} swipeDirection='down' onSwipeComplete={onBackdropPress} propagateSwipe={true}>
            <KeyboardAvoidingView behavior='padding' >
                <View style={Styles.content}>
                    <View style={{width: 27.5, height: 4, backgroundColor: Colors.grey5, marginTop: 10, alignSelf: 'center'}} />
                    <TextComponent size={17} weight='Bold' color={Colors.black} style={{marginTop: 10.2, paddingBottom: 19.5}}>
                        {params?.title}
                    </TextComponent>
                    <Separator />
                    {params?.content}
                </View>
            </KeyboardAvoidingView>
        </ReactNativeModal>
    )
}

export default ModalComponent;

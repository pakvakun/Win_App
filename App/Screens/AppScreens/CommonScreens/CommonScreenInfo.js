import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import IconClose from '../../../src/assets/icons/IconClose';
import {Colors} from '../../../src/Themes';
import {TextComponent} from '../../../Components/TextComponent';
import {connect} from 'react-redux';
import {Styles} from './CommonStyle';

const CommonInfoScren = (props) => {
  useEffect(() => {
    props.navigation.setParams({
      iconBack: <IconClose />,
      title: props.route.params?.title || '',
    });
  }, []);
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.content}>
        <TextComponent color={Colors.black} size={14} lineHeight={21}>
          {props.infoText}
        </TextComponent>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  infoText:
    'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации соответствующий условий активизации. Товарищи! укрепление и развитие структуры играет важную роль в формировании модели развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации соответствующий условий активизации. ',
});
export default connect(mapStateToProps)(CommonInfoScren);

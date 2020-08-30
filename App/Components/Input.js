import React, {useState, forwardRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextComponent} from './TextComponent';
import {Colors} from '../src/Themes';
import {Styles} from './Styles/InputStyle';
import TextInputMask from 'react-native-text-input-mask';
import IconNext from '../src/assets/icons/IconNext';
import IconCalendar from '../src/assets/icons/IconCalendar';
import moment from 'moment';

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      targetStack,
      targetNavigate,
      targetNavigateParams,
      value = '',
      navigation,
      date,
      customHandler,
      keyboardType,
      multiline,
      inputStyle,
      containerStyle
    },
    ref,
  ) => {
    const [input, setInput] = useState(value);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const [dateValueStr, setDateValueStr] = useState('');

    const pressInput = () => {
      if (navigation) {
        navigation.push(targetStack, {
          screen: targetNavigate,
          params: targetNavigateParams,
        });
      }
      if (customHandler) {
        customHandler();
      }
      if (date) {
        setShowDatePicker(true);
      }
    };
    const onChangeDate = (e, d) => {
      setDateValue(d);
      setInput(moment(d).format('DD.MM.YYYY'));
    };

    return (
      <>
        <TouchableOpacity style={[Styles.inputContainer, containerStyle]} onPress={pressInput} activeOpacity={targetNavigate ? .7 : 1}>
          <TextComponent
            color={Colors.grey}
            size={12}
            weight="Bold"
            lineHeight={16}>
            {label}
          </TextComponent>
          <View style={Styles.inputWrapper}>
            {targetNavigate || date ? (
              <TextComponent
                color={value || input ? Colors.black : Colors.grey}
                style={Styles.input}>
                {value || input || placeholder}
              </TextComponent>
            ) : (
              <TextInputMask
                placeholder={placeholder}
                placeholderTextColor={Colors.grey}
                value={input}
                onChangeText={setInput}
                style={[Styles.input, inputStyle]}
                ref={ref}
                keyboardType={keyboardType}
                multiline={multiline}
              />
            )}
            {targetNavigate && (
              <IconNext
                fill={Colors.grey}
                style={{
                  transform: [{rotate: '270deg'}],
                  position: 'absolute',
                  right: 0,
                }}
              />
            )}
            {date && <IconCalendar style={{position: 'absolute', right: 0}} />}
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={showDatePicker}
          style={{flex: 1, justifyContent: 'flex-end', margin: 0, padding: 0}}>
          <View style={{width: '100%', backgroundColor: Colors.white}}>
            <TouchableOpacity style={{width: '100%', alignItems: 'flex-end', paddingHorizontal: 36}} onPress={() => setShowDatePicker(false)}>
              <TextComponent color={Colors.black}>Готово</TextComponent>
            </TouchableOpacity>
            <DateTimePicker
              mode="date"
              display="calendar"
              value={dateValue}
              onChange={onChangeDate}
              maximumDate={new Date()}
              textColor={Colors.black}
            />
          </View>
        </Modal>
      </>
    );
  },
);

export default Input;

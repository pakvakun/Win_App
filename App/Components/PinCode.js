import React, {useState, createRef} from 'react';
import {Styles} from './Styles/PinCodeStyle';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {Colors} from '../src/Themes';

const refs = new Array(4).fill(createRef())


const PinCode = (props) => {
  const {codeError} = props;
  const [codeFields, setCodeFields] = useState(new Array(4).fill(''));
  const [codeInputs, setCodeInputs] = useState({});
  const [inputSendCodeAll, setInputSendCodeAll] = useState('');

  const setRef = (r, k) => {
    refs[k] = r;
  };

  const changeText = (key, val) => {
    // if (val.length > 0) {
    //   this.refs[`inputSendCode${key < 4 ? key + 1 : key}`].focus();
    // }
    // if (val.length === 0) {
    //   this.refs[`inputSendCode${key !== 0 ? key - 1 : key}`].focus();
    // }
    setCodeInputs({
      ...codeInputs,
      [`inputSendCode${key}`]: !isNaN(+val) ? val : '',
    });
    let newCode = inputSendCodeAll.split();
    newCode[key] = val;
    newCode = newCode.join();
    setInputSendCodeAll(newCode);
  };

  const keyPress = (key, e) => {
    codeInputs[`inputSendCode${key}`] &&
    codeInputs[`inputSendCode${key}`].length > 0 &&
      (setCodeInputs({
        ...codeInputs,
        [`inputSendCode${key}`]: !isNaN(+e.nativeEvent.key)
          ? e.nativeEvent.key
          : '',
      }),
      refs[key < 4 ? key + 1 : key].focus());
    let newCode = inputSendCodeAll.split();
    newCode[key] = e.nativeEvent.key;
    newCode = newCode.join();
    setInputSendCodeAll(newCode);
  };
  return (
    <View style={Styles.sendCodeCodeField}>
      {codeFields.map((item, key) => {
        item = createRef();
        return (
          <TouchableOpacity
            onPress={() => {
              refs[key].focus();
            }}
            style={[
              Styles.pinDigitContainer,
              {borderColor: codeError ? 'red' : Colors.Grey},
            ]}
            key={key}>
            <View style={Styles.pinDidgit}>
              <TextInput
                ref={(r) => setRef(r, key)}
                keyboardType="numeric"
                onChangeText={(val) => {
                  changeText(key, val);
                }}
                onKeyPress={(e) => {
                  keyPress(key, e);
                }}
                value={codeInputs[`inputSendCode${key}`]}
                maxLength={1}
                style={Styles.pinDidgitInput}
              />
            </View>
          </TouchableOpacity>
        );
      })}
      <Text style={Styles.pinError}>
        {codeError ? codeError.code[0] : null}
      </Text>
    </View>
  );
};

export default PinCode;

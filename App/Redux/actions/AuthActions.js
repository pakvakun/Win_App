import {USER_SEND_PHONE, USER_SEND_CODE, CLEAR_ERROR, USER_LOGIN} from '../constants';
import Axios from 'axios';
import {baseUrl} from '../../src/Config';
import AsyncStorage from '@react-native-community/async-storage';

export const UserSendPhone = (phone) => ({
  type: USER_SEND_PHONE,
  payload: Axios({
    method: 'POST',
    baseURL: baseUrl,
    url: '/mobile/get-phone',
    data: {
      number: phone,
    },
  })
  .then((res) => res.data)
  .catch(err => console.log({err})),
});

export const UserSendCode = (phone, password) => ({
  type: USER_SEND_CODE,
  payload: Axios({
    method: 'POST',
    baseURL: baseUrl,
    url: 'mobile/registration',
    data: {
      phone,
      password,
    },
  })
  .then((res) => {
    console.log('data', res.data);
    return !!res.data;
  })
  .catch(err => ({error: err})),
});

export const UserLogin = (phone, password) => ({
  type: USER_LOGIN,
  payload: Axios({
    method: 'POST',
    baseURL: baseUrl,
    url: '/mobile/login',
    data: {
      phone,
      password,
    },
  }).then((res) => {
    console.log(res.data);
    // AsyncStorage.setItem('token', JSON.stringify(res.data));
    return res.data;
  }),
});


export const ClearError = () => ({
  type: CLEAR_ERROR,
  payload: false,
});

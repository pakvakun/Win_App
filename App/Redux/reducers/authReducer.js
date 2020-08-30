import {USER_SEND_PHONE, USER_SEND_CODE, CLEAR_ERROR, USER_LOGIN} from '../constants';

const initState = {};
export default (state = initState, action) => {
  switch (action.type) {
    case `${USER_SEND_PHONE}_PENDING`:
      state = {
        ...state,
        sendPhoneFetching: true,
      };
      break;
    case `${USER_SEND_PHONE}_FULFILLED`:
      state = {
        ...state,
        userAuthPhone: action.payload,
      };
      break;
    case `${USER_SEND_PHONE}_REJECTED`:
      state = {
        ...state,
        sendPhoneFetching: false,
      };
      break;
    case `${USER_LOGIN}_PENDING`:
      state = {
        ...state,
        userLoginFetching: true,
      };
      break;
    case `${USER_LOGIN}_FULFILLED`:
      state = {
        ...state,
        userLogin: action.payload,
        userLoginFetching: false
      };
      break;
    case `${USER_LOGIN}_REJECTED`:
      state = {
        ...state,
        userLoginFetching: false,
      };
      break;
    case `${USER_SEND_CODE}_PENDING`:
      state = {
        ...state,
        fetching: true,
      };
      break;
    case `${USER_SEND_CODE}_FULFILLED`:
      state = {
        ...state,
        fetching: false,
        isCodeCorrect: action.payload,
        codeSended: true
      };
      break;
    case `${USER_SEND_CODE}_REJECTED`:
      state = {
        ...state,
        sendPhoneFetching: false,
      };
      break;
    case CLEAR_ERROR:
      state = {
        ...state,
        error: action.payload,
      };
      break;
  }
  return state;
};

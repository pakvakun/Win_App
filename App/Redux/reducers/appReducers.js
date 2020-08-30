import {USER_CONFIRM_PHONE, USER_GET_COURSES_LIST, USER_SET_ROLE, ACTIVATE_TEACHER, USER_GET_COURSE, USER_GET_COURSE_TRAINING} from '../constants';

const initState = {
  userName: 'Dima',
  userText: 'short about',
  isTeacher: false,
};
export default (state = initState, action) => {
  switch (action.type) {
    case `${USER_CONFIRM_PHONE}_PENDING`:
      state = {
        ...state,
        sendPhoneFetching: true,
      };
      break;
    case `${USER_CONFIRM_PHONE}_FULFILLED`:
      state = {
        ...state,
        userConfirmPhone: action.payload,
      };
      break;
    case `${USER_CONFIRM_PHONE}_REJECTED`:
      state = {
        ...state,
        sendPhoneFetching: false,
      };
      break;
    case `${USER_GET_COURSE_TRAINING}_PENDING`:
      state = {
        ...state,
        courseTrainingFetching: true,
      };
      break;
    case `${USER_GET_COURSE_TRAINING}_FULFILLED`:
      state = {
        ...state,
        courseTrainingFetching: false,
        courseTraining: action.payload,
      };
      break;
    case `${USER_GET_COURSE_TRAINING}_REJECTED`:
      state = {
        ...state,
        courseTrainingFetching: false,
      };
      break;
    case `${USER_GET_COURSE}_PENDING`:
      state = {
        ...state,
        courseFetching: true,
      };
      break;
    case `${USER_GET_COURSE}_FULFILLED`:
      state = {
        ...state,
        courseFetching: false,
        course: action.payload,
      };
      break;
    case `${USER_GET_COURSE}_REJECTED`:
      state = {
        ...state,
        courseFetching: false,
      };
      break;
    case `${USER_GET_COURSES_LIST}_PENDING`:
      state = {
        ...state,
        coursesListFetching: true,
      };
      break;
    case `${USER_GET_COURSES_LIST}_FULFILLED`:
      state = {
        ...state,
        coursesListFetching: false,
        coursesList: action.payload,
      };
      break;
    case `${USER_GET_COURSES_LIST}_REJECTED`:
      state = {
        ...state,
        coursesListFetching: false,
      };
      break;
    case USER_SET_ROLE:
      state = {
        ...state,
        isTeacher: action.payload
      }
    case ACTIVATE_TEACHER:
      state = {
        ...state,
        isTeacherActivated: action.payload
      }
  }
  return state;
};

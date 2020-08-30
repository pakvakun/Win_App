import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import appReducers from './appReducers';

export default combineReducers({
  auth: AuthReducer,
  app: appReducers,
});

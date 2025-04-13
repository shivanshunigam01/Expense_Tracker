// src/store/reducers/index.js
import { combineReducers } from 'redux';
import auth from '../../context/auth-reducer/auth';


const rootReducer = combineReducers({
  auth
});

export default rootReducer;

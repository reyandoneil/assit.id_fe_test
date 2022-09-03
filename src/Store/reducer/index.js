import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import oth from './othReducer';

export default combineReducers({ employeeReducer, oth });

import { combineReducers } from 'redux';
import TestReducer from '../routes/Test/store/reducer';

export default combineReducers({
  test: TestReducer,
})
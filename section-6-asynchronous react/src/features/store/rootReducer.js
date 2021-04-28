import { combineReducers } from 'redux';
import asyncReducer from '../../app/async/asyncReducer';
import modalReducer from '../../app/common/modals/modalReducer';
import authReducer from '../auth/authReducer';
import { eventReducer } from '../events/eventReducer';
import testReducer from '../sandbox/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;

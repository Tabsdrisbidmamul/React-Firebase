import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import testReducer from '../sandbox/testReducer';

export function configureStore() {
  return createStore(testReducer, devToolsEnhancer());
}

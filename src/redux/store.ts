import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, legacy_createStore} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

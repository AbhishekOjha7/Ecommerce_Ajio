import {combineReducers} from 'redux';
import categoryReducer from '../screens/modules/Home/Electronics/reducer';
import ElectronicsReducer from '../screens/modules/Home/Electronics/reducer';
import CategoryReducer from '../screens/modules/Home/reducer';
import homeReducer from '../screens/modules/Home/reducer';

const rootReducer = combineReducers({
  homeReducer,
  categoryReducer,
});

export default rootReducer;

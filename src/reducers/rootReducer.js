import { combineReducers } from 'redux';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  detailReducer,
});

export default rootReducer;

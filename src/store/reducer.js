import { combineReducers } from 'redux';

import sessionReducer from './session/reducer';
import newsReducer from './news/reducer';

export default combineReducers({
  session: sessionReducer,
  news: newsReducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter.feature';

const rootReducer = combineReducers({
  counter: counterReducer.reducer,
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter.feature';
import employeesReducer from './features/employees.feature';
import userListSlide from './features/user-list.feature';

const rootReducer = combineReducers({
  counter: counterReducer.reducer,
  staff: employeesReducer.reducer,
  users: userListSlide.reducer,
});

export default rootReducer;

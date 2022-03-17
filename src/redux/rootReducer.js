import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter.feature';
import employeesReducer from './features/employees.feature';

const rootReducer = combineReducers({
  counter: counterReducer.reducer,
  staff: employeesReducer.reducer,
});

export default rootReducer;

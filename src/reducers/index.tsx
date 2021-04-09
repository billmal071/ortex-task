import { combineReducers } from '@reduxjs/toolkit';
import feedReducer from './feedReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  feedReducer: feedReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
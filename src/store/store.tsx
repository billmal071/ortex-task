import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from "../reducers"
import { loadState, saveState } from "../utilities/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    rootReducer
  },
  preloadedState: persistedState
})

store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof rootReducer>;


export type loginDispatch = typeof store.dispatch;
export function useLoginDispatch() {
  return useDispatch<loginDispatch>()
}

export default store;
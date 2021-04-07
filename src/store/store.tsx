import { configureStore } from '@reduxjs/toolkit';
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

export default store;
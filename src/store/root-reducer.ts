import { combineReducers } from '@reduxjs/toolkit';

import location from './slices/location';

const rootReducer = combineReducers({
  location
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

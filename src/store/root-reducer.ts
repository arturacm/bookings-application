import { combineReducers } from '@reduxjs/toolkit';

import location from './slices/location';
import reservation from './slices/reservation';

const rootReducer = combineReducers({
  location,
  reservation
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

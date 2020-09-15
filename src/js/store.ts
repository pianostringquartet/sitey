import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cvReducer from './cvSlice';

export const store = configureStore({
  reducer: {
    cv: cvReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
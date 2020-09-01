// single file for redux-related logic

// Since our app's usage of redux is small, 
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
  unknown, // what is this?
  Action<string>
>;




// distinguish between 'fetch CV' and 'save fetched CV'

// const RETRIEVE_CV: string = "RETRIEVE_CV";

// interface SaveCVAction {
//   type: typeof RETRIEVE_CV;
//   payload: string;
// }

// // skip this? version... it's not explicit enough...
// // redux-toolkit;
// // const saveCV = createAction<SaveCVAction>('RETRIEVE_CV')

// interface AppState {
//     cv: string
// }

// const initialState: AppState = {
//   cv: "## Retrieving CV...",
// };

// type FixMe = any

// // better?: handler
// function reducer(state = initialState, action: SaveCVAction): AppState {
//   switch (action.type) {
//     case RETRIEVE_CV:
//       // TODO: switch this notation to redux-toolkit later?
//       return Object.assign({}, state, {
//         cv: action.payload, // i.e. just the string, not an object
//       });

//     default:
//       return state;
//   }
// }

// const store = configureStore({
//   reducer: reducer,
//   // Includes immutability, thunk, devtools
//   middleware: (getDefaultMiddleware: FixMe) => 
//     getDefaultMiddleware()
// });

// // const middleware = [thunk, immutableStateInvariant, serializableStateInvariant];
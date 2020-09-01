import * as firebase from "firebase";
import "firebase/storage";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from "./store";

const firebaseConfig = {
  // A unique but non-secret key 
  apiKey: "AIzaSyCitvooaEa1pQyLI9MIHaMgiJuc6V6xASU",
  authDomain: "sitey-app.firebaseapp.com",
  databaseURL: "https://sitey-app.firebaseio.com",
  projectId: "sitey-app",
  storageBucket: "sitey-app.appspot.com",
  messagingSenderId: "675176377900",
  appId: "1:675176377900:web:be62244f600b2388d22b89",
};

firebase.initializeApp(firebaseConfig);

const storageURL: string = 'gs://sitey-app.appspot.com/'

const storageCV = firebase.storage().refFromURL(storageURL)

const CV_FILENAME: string = 'chris_clampitt_cv.md'
const ERROR_MESSAGE: string = "### There was an error retrieving the CV.";

const fetchCV = (cvFilename: string, storageRef: firebase.storage.Reference) =>
  storageRef
    .child(cvFilename)
    .getDownloadURL()
    .then((postURL: string) =>
      fetch(postURL).then((response) => response.text()))
    .catch((err) => ERROR_MESSAGE);

export const retrieveCV = (): AppThunk => dispatch => {
fetchCV(CV_FILENAME, storageCV)
    .then((cvFile: string) => dispatch(saveCV(cvFile)))
};

// State logic below
interface CVState {
    cv: string
}

const initialState: CVState = {
    cv: "## Retrieving CV...",
}

export const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        saveCV: (state: CVState, action: PayloadAction<string> ) => { 
            state.cv = action.payload;     
        }
    }
});

export const { saveCV } = cvSlice.actions;

export default cvSlice.reducer;

// // import * as ActionTypes from './ActionTypes'

// import * as firebase from 'firebase/app';
// // import { ThunkAction, Action } from "@reduxjs/toolkit";

// /*
// Firebase
// (See public/index.html for Firebase imports.)
// */
// const storageURL: string = 'gs://sitey-app.appspot.com/'
// const storageCV = firebase.storage().refFromURL(storageURL)
// const CV_FILENAME: string = 'chris_clampitt_cv.md'

// // export const RETRIEVE_CV : string = 'RETRIEVE_CV';

// // // ACTIONS, with type, action-creator, and reducer/handler 

// // // action type
// // interface SaveCVAction {
// //   type: typeof RETRIEVE_CV,
// //   payload: string,
// // }

// // // action creator
// // const saveCV = (cvFile: string) => (
// //   {
// //     type: RETRIEVE_CV,
// //     payload: cvFile
// //   }
// // )

// // // TODO: get real type of storageRef
// const retrieveCV = (cvFilename: string, storageRef: { child: (arg0: string) => { (): any; new(): any; getDownloadURL: { (): Promise<string>; new(): any; }; }; }) =>
//   storageRef.child(cvFilename).getDownloadURL()
//     .then((postURL: string) => fetch(postURL)
//       .then(response => response.text()))

    
// // type FixMe = any

// // // this is a thunk? 
// // export const retrieveAndSaveCV = () =>
// //   (dispatch: FixMe) =>
// //     retrieveCV(CV_FILENAME, storageCV)
// //       .then((cvFile: string) => dispatch(saveCV(cvFile)))

// export const retrieveAndSaveCV = () => (dispatch: FixMe) =>
//   retrieveCV(CV_FILENAME, storageCV).then((cvFile: string) =>
    
//     dispatch(saveCV(cvFile))
//   );



// // const saveCV = cvFile => (
// //   {
// //     type: ActionTypes.RETRIEVE_CV,
// //     content: cvFile
// //   }
// // )

// // // const retrieveCV = (cvFilename, storageRef) =>
// // //   storageRef.child(cvFilename).getDownloadURL()
// // //     .then(postURL => fetch(postURL)
// // //       .then(response => response.text()))

// // // export const retrieveAndSaveCV = () =>
// // //   dispatch =>
// // //     retrieveCV(CV_FILENAME, storageCV)
// // //       .then(cvFile => dispatch(saveCV(cvFile)))

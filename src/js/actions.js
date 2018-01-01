import * as ActionTypes from './ActionTypes'

/*
Firebase
(See public/index.html for Firebase imports.)
*/
const storageURL = 'gs://sitey-app.appspot.com/'
const storageCV = firebase.storage().refFromURL(storageURL)
const CV_FILENAME = 'chris_clampitt_cv.md'

const saveCV = cvFile => (
  {
    type: ActionTypes.RETRIEVE_CV,
    content: cvFile
  }
)

const retrieveCV = (cvFilename, storageRef) =>
  storageRef.child(cvFilename).getDownloadURL()
    .then(postURL => fetch(postURL)
      .then(response => response.text()))

export const retrieveAndSaveCV = () =>
  dispatch =>
    retrieveCV(CV_FILENAME, storageCV)
      .then(cvFile => dispatch(saveCV(cvFile)))

import * as ActionTypes from 'constants/ActionTypes'

import { slideNameToIndex } from 'reducers/navigation'
import { Fullpage } from 'fullpage-react'
const { changeHorizontalSlide } = Fullpage
// import { changeHorizontalSlide } from 'fullpage-react'

import { PERSONAL_SUBAPP } from 'reducers/navigation'

// Connecting to Firebase Database and Storage
// (See index.html for Firebase import.)
var database = firebase.database()
var storage = firebase.storage()
var storageRef = storage.refFromURL('gs://posty-blog-app.appspot.com')

// WORKAROUND:
// Because Fullpage-react (a) does not expose state explicitly,
// but (b) does expose functions to mutate state,
// we treat Fullpage-react state mutations as *Redux-style side-effects.*
// This gives us the advantages of Redux's "reasoning via actions/events",
// even though we can't have Redux's "one place to look"-advantage.
export const changeSlide = (horizontalSliderName, slide) =>
  () => changeHorizontalSlide(horizontalSliderName, slideNameToIndex(slide))

export const toggleDrawerSideMobileOpen = () => (
  {
    type: ActionTypes.TOGGLE_DRAWER_SIDE_MOBILE_OPEN
  }
)

export const changeSubApp = subApp => (
  {
    type: ActionTypes.CHANGE_SUBAPP,
    subApp: subApp
  }
)

export const returnToPersonalApp = () =>
  function (dispatch) {
    // dispatch(changeSlide('horizontalSlider1', 0))
    dispatch(changeSubApp(PERSONAL_SUBAPP))
  }

export const setPanel = panel => (
  {
    type: ActionTypes.CHANGE_PANEL,
    panel: panel
  }
)

export const changePanel = panel =>
  function (dispatch) {
    dispatch(setPanel(panel))
    dispatch(toggleDrawerSideMobileOpen())
  }

export const toggleReading = () => (
  {
    type: ActionTypes.TOGGLE_READING
  }
)

export const addPost = ({id, title, content}) => (
  {
    type: ActionTypes.ADD_POST,
    id: id,
    title: title,
    content: content
  }
)

export const updateCurrentPost = (id) => (
  {
    type: ActionTypes.UPDATE_CURRENT_POST,
    id: id
  }
)

export const updateAndViewCurrentPost = (id) =>
  function (dispatch) {
    dispatch(updateCurrentPost(id))
    dispatch(toggleReading())
  }

export const refreshCurrentPost = () => (
  {
    type: ActionTypes.REFRESH_CURRENT_POST
  }
)

function getPostURLPromise (postFilename, storageRef) {
  return storageRef.child(postFilename).getDownloadURL()
}

function retrievePostFile (urlPromise) {
  return fetch(urlPromise)
      .then(response => response.text())
}

// TODO:
// Break into smaller, more comprehensible and readable steps
export const retrieveAndSetPost = (post) =>
  dispatch => (
    getPostURLPromise(post.filename, storageRef)
      .then(urlPromise => (retrievePostFile(urlPromise)
        .then(function (postMarkdownFile) {
          dispatch(addPost({id: post.id, title: post.title, content: postMarkdownFile}))
          dispatch(refreshCurrentPost())
        }
        )
      )
    )
  )

export const syncPosts = () =>
  dispatch => (
    database.ref('posts/').on(
      'value',
      function (snapshot) {
        const posts = Object.values(snapshot.val())
        posts.map(post => (
          dispatch(retrieveAndSetPost(post))))
      }
    )
  )

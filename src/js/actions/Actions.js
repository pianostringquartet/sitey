import * as ActionTypes from 'constants/ActionTypes'


// Connecting to Firebase Database and Storage
var database = firebase.database();
var storage = firebase.storage();
var storageRef = storage.refFromURL('gs://posty-blog-app.appspot.com')


export const toggleDrawerSideMobileOpen = () => (
  {
    type: ActionTypes.TOGGLE_DRAWER_SIDE_MOBILE_OPEN
  }
)

export const setPanel = (panel) => (
  {
    type: ActionTypes.CHANGE_PANEL,
    panel: panel
  }
)

export const changePanel = (panel) => (
  function(dispatch) {
    dispatch(setPanel(panel))
    dispatch(toggleDrawerSideMobileOpen())
  }
)

export const toggleReading = () => (
  {
    type: ActionTypes.TOGGLE_READING,
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

export const updateAndViewCurrentPost = (id) => (
  function(dispatch) {
    dispatch(updateCurrentPost(id))
    dispatch(toggleReading())
  }
)

export const refreshCurrentPost = () => (
  {
    type: ActionTypes.REFRESH_CURRENT_POST
  }
)


function getPostURLPromise(post_filename, storageRef) {
  return storageRef.child(post_filename).getDownloadURL()
}

function retrievePostFile(url_promise) {
  return fetch(url_promise)
      .then(response => response.text())
}

// TODO:
// Break into smaller, more comprehensible and readable steps
export const retrieveAndSetPost = (post) => (
  dispatch => (
    getPostURLPromise(post.filename, storageRef)
      .then(url_promise => (retrievePostFile(url_promise)
        .then(function(post_md_file) {
            dispatch(addPost({id: post.id, title: post.title, content: post_md_file}))
            dispatch(refreshCurrentPost())
          }
        )
      )
    )
  )
)

export const syncPosts = () => (
  dispatch => (
    database.ref('posts/').on(
      'value',
      function(snapshot) {
        const posts = Object.values(snapshot.val())
        posts.map(post => (
          dispatch(retrieveAndSetPost(post))))
      }
    )
  )
)

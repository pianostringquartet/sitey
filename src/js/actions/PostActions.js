import * as action_types from '../constants/ActionTypes'

var database = firebase.database();

var storage = firebase.storage();
var storageRef = storage.refFromURL('gs://posty-blog-app.appspot.com')


export const setReading = (isReading) => (
  {
    type: action_types.SET_READING,
    isReading: isReading
  }
)

export const changePanel = (panel) => (
  {
    type: action_types.CHANGE_PANEL,
    panel: panel
  }
)

export const addPost = ({id, title, content}) => (
  {
    type: action_types.ADD_POST,
    id: id,
    title: title,
    content: content
  }
)

export const updateCurrentPost = (id) => (
  {
    type: action_types.UPDATE_CURRENT_POST,
    id: id
  }
)

export const updateAndViewCurrentPost = (id) => (
  function(dispatch) {
    dispatch(updateCurrentPost(id))
    dispatch(setReading(true))
  }
)

export const refreshCurrentPost = () => (
  {
    type: action_types.REFRESH_CURRENT_POST
  }
)


function getPostURLPromise(post_filename, storageRef) {
  console.log("getPostURLPromise called")
  console.log("post_filename is: " + post_filename)
  return storageRef.child(post_filename).getDownloadURL()
}

function retrievePostFile(url_promise) {
  console.log("retrievePostFile called")
  return fetch(url_promise)
      .then(response => response.text())
}

// where post is an object like {id title filename}
// 'retrieve' = pull .md file from FB storage
// 'set' = add {id: id, title: title, content: .md-file} to app db
export const retrieveAndSetPost = (post) => (
  dispatch => (
    getPostURLPromise(post.filename, storageRef)
      .then(url_promise => (retrievePostFile(url_promise)
        .then(function(post_md_file) {
            console.log("calling last part of retrieveAndSetPost")
            dispatch(addPost({id: post.id, title: post.title, content: post_md_file}))
            dispatch(refreshCurrentPost)
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

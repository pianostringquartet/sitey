import * as action_types from '../constants/ActionTypes'

var database = firebase.database();

export const addPost = (title, content) => (
  {
    type: action_types.ADD_POST,
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

const addPosts = (posts) => (
  {
    type: action_types.ADD_POSTS,
    posts: posts // posts from external Firebase db
  }
)

export const refreshCurrentPost = () => (
  {
    type: action_types.REFRESH_CURRENT_POST
  }
)


// .on("value", a-func)
export const syncPosts = () => (
  dispatch => (
    database.ref('posts/').on(
      'value',
      function(snapshot) {
        dispatch(addPosts(snapshot.val()))
        dispatch(refreshCurrentPost())
      }
    )
  )
)

// you want to also update the current post
// (i.e. the same id for current post, but update )
// but in order to do that here,
// you'd need to know the id of the current post

// how about a "refresh current post" action?
// in the reducer, we'll have the app's State including :current-post,
// and

import * as action_types from '../constants/ActionTypes'

var database = firebase.database();


export const changePanel = (panel) => (
  {
    type: action_types.CHANGE_PANEL,
    panel: panel
  }
)



// updateCurrentPost needs to dispatch a changePanel-to-CurrentPost
// action as well

// ... in re-frame, you would probably not dispatch another event
// and instead would just also update the store
// in the Event handler (probly using a reusable function)

// but in redux, it's easier to dispatch another event
// export const updateCurrentPost = (id) => (
//   {
//     type: action_types.UPDATE_CURRENT_POST,
//     id: id
//   }
// )

// expanded to also dispatch an event
// export const updateCurrentPost = (id) => (
//   {
//     type: action_types.UPDATE_CURRENT_POST,
//     id: id
//   }
// )

// this action is only triggered when user clicks on
// blog post title
export const updateCurrentPost = (id) => (
  {
    type: action_types.UPDATE_CURRENT_POST,
    id: id
  }
)

export const updateAndViewCurrentPost = (id) => (
  function(dispatch) {
    dispatch(updateCurrentPost(id))
    dispatch(changePanel('CURRENT_POST_PANEL'))
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



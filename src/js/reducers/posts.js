import { ADD_POST,
         ADD_POSTS,
         SET_READING,
         UPDATE_CURRENT_POST,
         REFRESH_CURRENT_POST } from '../constants/ActionTypes'

var _ = require('lodash/core');

const initialPosts = {

  // added:
  // Are we reading a post?
  // false: show list
  // true: show current_post

  // default to false
  isReading: false,

  current_post: {
    id: 0,
    title: "The Lived Experience of Programming",
    content: "Programming is an experience."
  },
  posts: [
    {
      id: 0,
      title: "The Lived Experience of Programming",
      content: "Programming is an experience."
    },
  ]
}

// Object list -> Int
const newMaxId = (posts) => (
  1 + _.reduce(posts,
              (maxId, post) => Math.max(post.id, maxId),
              -1)
)


export default function posts(state = initialPosts, action) {
  switch (action.type) {

    // added:
    case SET_READING:
      return Object.assign({}, state, {
          isReading: action.isReading
        })

    case ADD_POST:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            id: newMaxId(state.posts),
            title: action.title,
            content: action.content
          }
        ]
      })

    case UPDATE_CURRENT_POST:
      const new_current_post = state.posts.filter(post =>
        post.id === action.id)[0]
      return Object.assign({}, state, {
        current_post: new_current_post
      })

    case REFRESH_CURRENT_POST:
      const refreshed_current_post = state.posts.filter(post =>
        post.id === state.current_post.id)[0]
      return Object.assign({}, state, {
        current_post: refreshed_current_post
      })

    default:
      return state
  }
}

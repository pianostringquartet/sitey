import { ADD_POST, UPDATE_CURRENT_POST } from '../constants/ActionTypes'


// the intial data for the Posts domain
// const initialPosts = [
//   {
//     id: 1,
//     title: "Love your neighbor",
//     content: "Jesus taught, Love your neighbor. Good idea!"},
//   {
//     id: 2,
//     title: "Atman is Brahmin",
//     content: "The Upanishads tell us, Atman is Brahmin. Cool huh?"
//   },
// ]

const initialPosts = {

  current_post: {
    id: 2,
    title: "There is no God but God",
    content: "Mohammend tells us, There is no God but God."
  },

  posts: [
    {
      id: 0,
      title: "Love your neighbor",
      content: "Jesus taught, Love your neighbor. Good idea!"},
    {
      id: 1,
      title: "Atman is Brahmin",
      content: "The Upanishads tell us, Atman is Brahmin. Cool huh?"
    },
  ]
}


// a Reducer receives an action (event),
// and decides how the store (app-db)
// will change (or not) in response to the action
// export default function posts(state = [], action) {
  export default function posts(state = initialPosts, action) {
  switch (action.type) {

    // for now, ADD_POST will just add a default post
    case ADD_POST:
      return [
        ...state.posts,
        {
          id: 3,
          title: "I am a default post",
          content: "I am the content of a default post"
        }
      ]

      // i want to return the entire original object,
      // but with only current_post changed...

    case UPDATE_CURRENT_POST:
      // filter down the array,
      // then grab only the first item
      const new_current_post = state.posts.filter(post =>
        post.id === action.id)[0]
      return Object.assign({}, state, {
        current_post: new_current_post
      })

    default:
      return state
    }
}

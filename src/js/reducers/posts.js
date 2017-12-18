import { ADD_POST,
         ADD_POSTS,
         UPDATE_CURRENT_POST,
         REFRESH_CURRENT_POST } from '../constants/ActionTypes'


const initialPosts = {
  current_post: {
    id: 2,
    title: "There is no God but God",
    content: "### Mohammend tells us, There is no God but God."
  },
  posts: [
    {
      id: 0,
      title: "Love your neighbor",
      content: "### Jesus taught, Love your neighbor. Good idea!"},
    {
      id: 1,
      title: "Atman is Brahmin",
      content: `Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io).
# Installation

## Download tarball

You can download the latest release tarball directly from [releases][releases]

## Bower

    bower install showdown

## npm (server-side)

    npm install showdown

## CDN

You can also use one of several CDNs available:

* rawgit CDN

        https://cdn.rawgit.com/showdownjs/showdown/<version tag>/dist/showdown.min.js

* cdnjs

        https://cdnjs.cloudflare.com/ajax/libs/showdown/<version tag>/showdown.min.js
`
    },
  ]
}

// a Reducer receives an action (event),
// and decides how the store (app-db)
// will change (or not) in response to the action
// export default function posts(state = [], action) {
export default function posts(state = initialPosts, action) {
  switch (action.type) {

    case ADD_POST:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            id: action.id,
            title: action.title,
            content: action.content
          }
        ]
      })

    case ADD_POSTS:
      return Object.assign({}, state, {
        posts: action.posts
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

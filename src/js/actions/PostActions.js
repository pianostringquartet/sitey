
// Given an event-id (action type) of X,
// return give this js object (map) to a reducer

import * as action_types from '../constants/ActionTypes'

// right now, just a default
// export const addPost = () => (
//   {type: action_types.ADD_POST})

export const addPost = (title, content) => (
  {type: action_types.ADD_POST,
   title: title,
   content: content
  })

export const updateCurrentPost = (id) => (
  {type: action_types.UPDATE_CURRENT_POST,
   id: id})

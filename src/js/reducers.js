import { combineReducers } from 'redux'
import { RETRIEVE_CV } from './ActionTypes'

const initialState = {
  cv: {
    id: 0,
    content: '## Retrieving CV...'
  }
}

function cv (state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_CV:
      return Object.assign({}, state, {
        cv: {
          id: 0,
          content: action.content
        }
      })

    default:
      return state
  }
}

export default combineReducers({
  cv: cv
})

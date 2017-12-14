import { combineReducers } from 'redux'
import posts from './posts'

// combineReducers accepts a js object,
// where key is data-domain ('model'),
// and value is reducer ('update'/how to update that domain)
const rootReducer = combineReducers({
  posts: posts
})

export default rootReducer

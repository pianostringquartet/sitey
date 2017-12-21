import { combineReducers } from 'redux'
import blog from './blog'
import navigation from './navigation'

// combineReducers accepts a js object,
// where key is data-domain ('model'),
// and value is reducer ('update'/how to update that domain)
const rootReducer = combineReducers({
  blog: blog,
  navigation: navigation
})

export default rootReducer

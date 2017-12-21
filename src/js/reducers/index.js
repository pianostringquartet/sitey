import { combineReducers } from 'redux'
import blog from './blog'
import navigation from './navigation'

const rootReducer = combineReducers({
  blog: blog,
  navigation: navigation
})

export default rootReducer

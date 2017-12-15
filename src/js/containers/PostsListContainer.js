import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
// import * as PostActions from '../actions'
import { updateCurrentPost } from '../actions/PostActions'

// the container for PostsLists (a dumb comp
// which itself contains 0 or more dumb comp PostItems)

// so state is the whole Store here,
// not just a domain?

// accepts state, returns js object
const mapStateToProps = state => ({
  posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateCurrentPost}, dispatch)
})

// inject the data-domain and the available events
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)

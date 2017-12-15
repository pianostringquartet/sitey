import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddPost from '../components/AddPost'
// import * as PostActions from '../actions'
import { addPost } from '../actions/PostActions'

// const mapStateToProps = state => ({
//   posts: state.posts.posts
// })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({addPost}, dispatch)
})

// inject the data-domain and the available events
export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
  // null
)(AddPost)

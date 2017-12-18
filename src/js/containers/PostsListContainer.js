import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import {updateAndViewCurrentPost } from '../actions/PostActions'

// DEPRECATED

const mapStateToProps = state => ({
  posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateAndViewCurrentPost}, dispatch)
})

// inject the data-domain and the available events
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)

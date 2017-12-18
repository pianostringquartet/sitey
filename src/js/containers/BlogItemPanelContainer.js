import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import BlogItemPanel from '../components/BlogItemPanel'
import BlogItemPanel from 'components/panels/BlogItemPanel'
// import { changePanel } from '../actions/PostActions'
import { setReading } from '../actions/PostActions'

const mapStateToProps = state => ({
  title: state.posts.current_post.title,
  content: state.posts.current_post.content,
  isReading: state.posts.isReading
})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators({ changePanel }, dispatch)
  actions: bindActionCreators({ setReading }, dispatch)
})

// inject the data-domain and the available events
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItemPanel)



import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import BlogItemPanel from '../components/BlogItemPanel'
import BlogItemPanel from 'components/panels/BlogItemPanel'
import { changePanel } from '../actions/PostActions'

const mapStateToProps = state => ({
  title: state.posts.current_post.title,
  content: state.posts.current_post.content
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changePanel }, dispatch)
})

// inject the data-domain and the available events
export default connect(
  mapStateToProps
  , mapDispatchToProps
)(BlogItemPanel)



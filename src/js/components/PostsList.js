import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {updateAndViewCurrentPost } from '../actions/PostActions'
import ClickableList from 'utils/ClickableList'


const PostsList = ({posts, actions}) => (
  <ClickableList
    items={
      posts.map(post => (
        {
          displayable: post.title,
          callable: () => actions.updateAndViewCurrentPost(post.id)
        }))
    }
  />
)

const mapStateToProps = state => ({
  posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateAndViewCurrentPost}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)

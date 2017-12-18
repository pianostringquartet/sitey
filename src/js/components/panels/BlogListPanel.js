import React from 'react';
import PostsList from 'components/PostsList'

// instead of BlogItemPanel, BlogListPanel
// just have 'BlogPanel'
// and rename 'posts' db-domain to 'blog'


// START TREATING THIS AS JUST "BLOG PANEL"

const BlogPanel = () => (
  <div>
    <PostsList />
  </div>
)

export default BlogPanel



// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// // import BlogItemPanel from '../components/BlogItemPanel'
// import BlogItemPanel from 'components/panels/BlogItemPanel'
// import { changePanel } from '../actions/PostActions'

import React from 'react';
import { connect } from 'react-redux'
import PostsList from 'components/PostsList'
import BlogItemPanelContainer from 'containers/BlogItemPanelContainer'
// instead of BlogItemPanel, BlogListPanel
// just have 'BlogPanel'
// and rename 'posts' db-domain to 'blog'


// START TREATING THIS AS JUST "BLOG PANEL"

const DisplayPostOrList = ({isReading}) => (
  isReading ? <BlogItemPanelContainer /> : <PostsList />
)

const mapStateToProps = state => ({
  isReading: state.posts.isReading
})

const DisplayPostOrListContainer = connect(
  mapStateToProps
)(DisplayPostOrList)

const BlogPanel = () => (
  <div>
    <DisplayPostOrListContainer />
  </div>
)

export default BlogPanel

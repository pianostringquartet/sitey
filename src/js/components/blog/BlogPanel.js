import React from 'react'
import { connect } from 'react-redux'
import PostsList from 'components/blog/PostsList'
import CurrentPost from 'components/blog/CurrentPost'
import Typography from 'material-ui/Typography'

const DisplayPostOrList = ({isReading}) => (
  isReading ? <CurrentPost /> : <PostsList />
)

const mapStateToProps = state => ({
  isReading: state.blog.isReading
})

const DisplayPostOrListContainer = connect(
  mapStateToProps
)(DisplayPostOrList)

const BlogPanel = () => (
  <div>
    <Typography type='display1'>
      BLOG
    </Typography>
    <DisplayPostOrListContainer />
  </div>
)

export default BlogPanel

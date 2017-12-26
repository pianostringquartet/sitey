import React from 'react'
import { withStyles } from 'material-ui/styles'
import NavButton from 'utils/NavButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleReading } from 'actions/Actions'

import { Header } from 'semantic-ui-react'

var marked = require('marked')

const styles = () => ({
  root: {
    'font-family': 'Helvetica, Arial, sans-serif',
    'font-size': '16'
  }
})

// { <NavButton value={'back to blog'} callable={() => actions.toggleReading()} />

const createMarkup = (text) => (
  {__html: marked(text, {sanitize: true})})

const CurrentPost = ({actions, isReading, title, content, classes}) => (
  <div className={classes.root}>
    <Header color='orange' as='h1'>{title}</Header>
    <span
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  </div>)

const styledCurrentPost = withStyles(styles)(CurrentPost)

const mapStateToProps = state => ({
  title: state.blog.currentPost.title,
  content: state.blog.currentPost.content,
  isReading: state.blog.isReading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleReading }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledCurrentPost)

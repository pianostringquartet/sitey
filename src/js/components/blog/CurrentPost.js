import React from 'react'
import { withStyles } from 'material-ui/styles';
import NavButton from 'utils/NavButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleReading } from 'actions/Actions'

var marked = require('marked');


const styles = () => ({
  root: {
    'font-family': "Helvetica, Arial, sans-serif",
    'font-size': "16"
  }
})

// str -> obj
const createMarkup = (text) => (
  {__html: marked(text, {sanitize:true})})

const CurrentPost = ({actions, isReading, title, content, classes}) => (
  <div className={classes.root}>
    <NavButton
      callable={() => actions.toggleReading()}
    />
    <h2> {title} </h2>
    <span
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  </div>)

const styledCurrentPost = withStyles(styles)(CurrentPost);

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

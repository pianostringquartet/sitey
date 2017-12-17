import React from 'react'
import { withStyles } from 'material-ui/styles';
import NavButton from './NavButton'

var marked = require('marked');

// marked produces HTML,
// which can inherit CSS styling
const styles = () => ({
  root: {
    'font-family': "Helvetica, Arial, sans-serif",
    'font-size': "16"
  }
})

// str (Markdown format) -> str (HTML format)
const createMarkup = (text) => (
  {__html: marked(text, {sanitize:true})})

const CurrentPost = ({actions, title, content, classes}) => (
  <div className={classes.root}>
    <NavButton actions={actions} />
    <h2> {title} </h2>
    <span dangerouslySetInnerHTML={createMarkup(content)} />
  </div>)

export default withStyles(styles)(CurrentPost);

import React from 'react'
import { withStyles } from 'material-ui/styles';
// import BackToBlogButton from 'utils/BackToBlogButton'
import NavButton from 'utils/NavButton'

var marked = require('marked');


const styles = () => ({
  root: {
    'font-family': "Helvetica, Arial, sans-serif",
    'font-size': "16"
  }
})

var showdown  = require('showdown')
var converter = new showdown.Converter()
    // text      = '#hello, markdown!',
    // html      = converter.makeHtml(text);

const toMarkDownHTML = (text) => (
  converter.makeHtml(text)
)

// str (Markdown format) -> str (HTML format)
// const createMarkup = (text) => (
//   {__html: marked(text, {sanitize:true})})

const createMarkup = (text) => (
  {__html: toMarkDownHTML(text)}
)

const CurrentPost = ({actions, title, content, classes}) => (
  <div className={classes.root}>
    <NavButton
      callable={() => actions.changePanel('BLOG_LIST_PANEL')}
    />
    <h2> {title} </h2>
    <span
      dangerouslySetInnerHTML={createMarkup(content)}
      />
  </div>)

export default withStyles(styles)(CurrentPost);


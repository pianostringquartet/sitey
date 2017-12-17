import React from 'react'
import NavButton from './NavButton'

var marked = require('marked');



// a dumb comp that simply shows the current post
// this comp receives post id, title, and content
// and displays it

// i.e. str (in markdown format) to html
const createMarkup = (text) => (
  {__html: marked(text, {sanitize:true})})

const CurrentPost = ({actions, title, content}) => (
  <div>
    <NavButton actions={actions} />
    <h2> {title} </h2>
    <span dangerouslySetInnerHTML={
      createMarkup(content)} />
  </div>)

export default CurrentPost

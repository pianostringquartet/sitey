import React from 'react'
import { withStyles } from 'material-ui/styles';
import BackToBlogButton from './BackToBlogButton'

var marked = require('marked');


var storage = firebase.storage();



// probably better to just retrieve all files at once,
// instead of one at a time?
// var gsReference = storage.refFromURL('gs://posty-blog-app.appspot.com/Glossary.md')
var storageRef = storage.refFromURL('gs://posty-blog-app.appspot.com')


// ##########
// WORKED to make a request, after setting permissions on Cloud Storage
// var storageRef = firebase.storage().ref("/Glossary.md");
// storageRef.getDownloadURL().then(function(url) {
//   console.log(url);
// });
// ##########


// marked produces HTML,
// which can inherit CSS styling
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
    <BackToBlogButton actions={actions} />
    <h2> {title} </h2>
    <span
      dangerouslySetInnerHTML={createMarkup(content)}
      />
  </div>)

export default withStyles(styles)(CurrentPost);


import React from 'react'
import { withStyles } from 'material-ui/styles';
import NavButton from 'utils/NavButton'

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

// const DisplayPost = (isReading, content) => (
//   isReading? :
// )


// good but you want this logic in the BlogPanel
const CurrentPost = ({actions, isReading, title, content, classes}) => (
  <div className={classes.root}>
    <NavButton
      callable={() => actions.setReading(false)}
    />
    <h2> {title} </h2>
    <span
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  </div>)

export default withStyles(styles)(CurrentPost);





// callable={() => actions.changePanel('BLOG_LIST_PANEL')}
// const CurrentPost = ({actions, title, content, classes}) => (
//   <div className={classes.root}>
//     <NavButton
//       callable={() => actions.setReading(false)}
//     />
//     <h2> {title} </h2>
//     <span
//       dangerouslySetInnerHTML={createMarkup(content)}
//       />
//   </div>)

// export default withStyles(styles)(CurrentPost);


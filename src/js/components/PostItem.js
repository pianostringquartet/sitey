import React, { Component } from 'react'
import { ListItem } from 'material-ui/List';

// this couples together a Material-UI component with
// your own events;
// you probably don't want this
const PostItem = ({id, title, actions}) => (
  <ListItem
    children={
      // <a onClick={function() {actions.updateCurrentPost(id)}}>
      <a onClick={function() {actions.updateAndViewCurrentPost(id)}}>
        {title}
      </a>}
  />
)

export default PostItem

import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const PostItem = ({id, title, actions}) => (
  <ListItem
    children={
      // <a onClick={function() {actions.updateCurrentPost(id)}}>
      <a onClick={function() {actions.updateAndViewCurrentPost(id)}}>
        {title}
      </a>}
  />
)

const PostsList = ({posts, actions, classes}) => (
    <div className={classes.root}>
      <List>
        {posts.map(post =>
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              actions={actions}/>)}
      </List>
    </div>
)

export default withStyles(styles)(PostsList);

import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import PostItem from './PostItem'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});


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

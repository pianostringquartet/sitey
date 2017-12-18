import React from 'react';

import PostsListContainer from '../containers/PostsListContainer'

// BlogPanel can be a list of posts

// ... but when user selects a given post, we need to
// then show that given post instead of the list of posts

// how about:
// when a user clicks on a post title,
// we dispatch an event that sets the current panel to be CurrentPostPanel

// CurrentPostPanel will have CurrentPostContainer in it :-)

// you might even want to have a new, separate 'panels' directory too?
// or make a directory for each Panel?


const BlogPanel = () => (
  <div>
    <PostsListContainer />
  </div>
)

export default BlogPanel

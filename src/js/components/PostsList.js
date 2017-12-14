import React from 'react'

import PostItem from './PostItem'

// will be injected with State and Dispatch logic,
// i.e. a js object with a key containing posts,
// and a key containing actions
const PostsList = ({posts, actions}) => (
  <div>
    <ul>
      {posts.map(post =>
          <PostItem key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    actions={actions}/>)}
    </ul>
  </div>
)

export default PostsList

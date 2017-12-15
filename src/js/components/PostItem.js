import React, { Component } from 'react'


// {marked('# Marked in browser\n\nRendered by **marked**.')}

// remember: React comps ALWAYS accept an object,
// AND they cannot render an object,
// so just always destructure the passed in object
const PostItem = ({id, title, content, actions}) => (
    <li>
      <a onClick={function () {actions.updateCurrentPost(id)}}>
        {title}
      </a>
    </li>

)

export default PostItem

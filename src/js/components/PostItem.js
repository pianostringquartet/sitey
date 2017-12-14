import React, { Component } from 'react'

// this comp receives post id, title, and content
// and displays it

// remember: React comps ALWAYS accept an object,
// AND they cannot render an object,
// so just always destructure the passed in object
const PostItem = ({id, title, content, actions}) => (
    <li>
      <a
        // onClick={ function () {alert(id)}
        onClick={function () {actions.updateCurrentPost(id)}}
        >
        {title}
      </a>
      {/*{title}*/}
    </li>
)

export default PostItem

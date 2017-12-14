import React from 'react'

// a dumb comp that simply shows the current post

const CurrentPost = ({title, content}) => (
  <div>
    <h2>
      {title}
    </h2>
    {content}
  </div>
  )

export default CurrentPost

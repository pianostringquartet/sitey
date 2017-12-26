import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import StatefulSlider from 'utils/StatefulSlider'

const PostyApp = () => (
  <div>
    <StatefulSlider />
  </div>
)

render(<PostyApp />, document.getElementById('app'))

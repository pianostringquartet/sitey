import React from 'react'
import { Responsive } from 'semantic-ui-react'

const HideOnMobile = ({content}) =>
  <Responsive minWidth={768}>
    {content}
  </Responsive>

export default HideOnMobile

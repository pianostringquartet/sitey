import React from 'react'
import { Responsive } from 'semantic-ui-react'

type Fixme = any;

const HideOnMobile = ({content}: Fixme) =>
  <Responsive minWidth={768}>
    {content}
  </Responsive>

export default HideOnMobile

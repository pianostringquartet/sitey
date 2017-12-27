import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'

const SlideNameTag = ({ color, icon, content }) =>
  <Grid.Row>
    <Header color={color}>
      <Icon name={icon} />
      {content}
    </Header>
  </Grid.Row>

export default SlideNameTag

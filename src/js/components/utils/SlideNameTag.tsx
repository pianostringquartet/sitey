import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'

type Fixme = any;

const SlideNameTag = ({ color, icon, content }: Fixme) => (
  <Grid.Row>
    <Header color={color}>
      <Icon name={icon} />
      {content}
    </Header>
  </Grid.Row>
);

export default SlideNameTag

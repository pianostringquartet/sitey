import React from 'react'
import { connect } from 'react-redux'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

const BlogGrid = () => (
  <Grid columns={2}>

    <Grid.Row>
      <Header color='purple'>
        <Icon name='hand peace' />
        BLOG
      </Header>
    </Grid.Row>

    <Grid.Column>
      <Header as='h2'>BLOG</Header>
    </Grid.Column>
    <Grid.Column>
      Blog highlights here.
    </Grid.Column>
  </Grid>
)

// needs to be put on a grid
const BlogPanel = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
   >
    <BlogGrid />
  </Grid>
)

export default BlogPanel

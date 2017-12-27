import React from 'react'
import { List, Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

const CenteringGrid = ({content}) => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    {content}
  </Grid>
)

export default CenteringGrid

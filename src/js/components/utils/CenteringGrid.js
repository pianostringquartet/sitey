import React from 'react'
import { Container, List, Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

const CenteringGrid = ({content}) => (
  <Grid
    verticalAlign='middle'
    style={{
      margin: 'auto',
      height: '100%',
      width: '60%'}}
    >
    {content}
  </Grid>
)

export default CenteringGrid

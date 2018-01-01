import React from 'react'
import { Grid } from 'semantic-ui-react'

const CenteringGrid = ({ content }) => (
  <Grid
    verticalAlign='middle'
    style={{
      margin: 'auto',
      height: '100%',
      width: '55%'}}
    >
    {content}
  </Grid>
)

export default CenteringGrid

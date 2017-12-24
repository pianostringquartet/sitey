import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const GridItem = ({item}) => (
  <Grid item>
    {item}
  </Grid>
)

const AppGrid = ({items}) => (
  <Grid container spacing={24}>
    {items.map(item =>
      <GridItem
        key={item.id}
        item={item.item}
      />)}
  </Grid>
)

export default AppGrid

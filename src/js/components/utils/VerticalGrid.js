import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

/*
A vertical grid with additional spacing.
*/

// caller passes in items, which is an array of stuff that goes between
// the <Grid item? </Grid>

// so each NowPanel would pass in:
// [<Typ>]

const VerticalGridItem = ({item}) => (
  <Grid item>
    {item}
  </Grid>
)

const VerticalGrid = ({items}) => (
  <Grid container direction='column' spacing={24}>
    {items.map(item =>
      <VerticalGridItem
        key={Math.random()}
        item={item}
      />)}
  </Grid>
)

export default VerticalGrid

// const VerticalGrid = ({items, title}) => (
//   <Grid container direction='column' spacing={24}>

//     <Grid item>
//       <Typography type='display1'>
//           NOW
//       </Typography>
//     </Grid>

//     <Grid item>
//       <Typography>
//         (This is a <a href='http://nownownow.com/about'>Now page</a>.
//           Now pages are cool now.)
//       </Typography>
//     </Grid>

//     <Grid item>
//       <Typography type='title'>
//           Currently wrapping up four months of:
//         </Typography>
//       <CurrentlyListContainer />
//     </Grid>

//     <Grid item>
//       <Typography type='title'>
//       Currently in love with:
//     </Typography>
//       <LoveList />
//     </Grid>
//   </Grid>
// )

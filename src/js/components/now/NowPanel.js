import React from 'react'
import ClickableList from 'utils/ClickableList'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import CurrentlyDoingList from 'components/now/CurrentlyDoingList'
import CurrentlyLovingList from 'components/now/CurrentlyLovingList'

import PaperSheet from 'utils/PaperSheet'

// import Grid from 'material-ui/Grid'

import { Grid, Header, Card, Icon, Image } from 'semantic-ui-react'

const NowGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        (This is a <a href='http://nownownow.com/about'>Now page</a>.
      Now pages are cool now.)
      </Grid.Column>
      <Grid.Column>
        Currently wrapping up four months of:
        <CurrentlyDoingList />
      </Grid.Column>
      <Grid.Column>
        Currently in love with:
        <CurrentlyLovingList />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

// const NowPanel = () => (
//   <Card fluid>
//     <NowGrid />
//   </Card>
// )

const NowPanel = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
    >
    <NowGrid />
  </Grid>
)

export default NowPanel

// const NowGrid = ({items}) => (
//   <Grid container spacing={24}>
//     {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
//   </Grid>
// )

// const nowPanelItems = [
//   {
//     id: 1,
//     item: <Typography type='display1'> NOW </Typography>
//   },

//   {
//     id: 2,
//     item: <Typography>
//       (This is a <a href='http://nownownow.com/about'>Now page</a>.
//       Now pages are cool now.)
//     </Typography>
//   },

//   {
//     id: 3,
//     item: <span>
//       <Typography type='title'> Currently wrapping up four months of:</Typography>
//       <CurrentlyDoingList />
//     </span>
//   },

//   {
//     id: 4,
//     item: <span>
//       <Typography type='title'> Currently in love with:</Typography>

//     </span>
//   }
// ]

// export default () => <PaperSheet item={<NowGrid items={nowPanelItems} />} />

// const NowPanel = () => <VerticalGrid items={nowPanelItems} />

// export default NowPanel

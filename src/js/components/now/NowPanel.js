import React from 'react'
import ClickableList from 'utils/ClickableList'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import CurrentlyDoingList from 'components/now/CurrentlyDoingList'
import CurrentlyLovingList from 'components/now/CurrentlyLovingList'

const nowPanelItems = [
  <Typography type='display1'> NOW </Typography>,

  <Typography>
    (This is a <a href='http://nownownow.com/about'>Now page</a>.
    Now pages are cool now.)
  </Typography>,

  <span>
    <Typography type='title'> Currently wrapping up four months of:</Typography>
    <CurrentlyDoingList />
  </span>,

  <span>
    <Typography type='title'> Currently in love with:</Typography>
    <CurrentlyLovingList />
  </span>
]

const NowPanel = () => <VerticalGrid items={nowPanelItems} />

export default NowPanel

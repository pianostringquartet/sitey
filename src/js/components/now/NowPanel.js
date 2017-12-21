import React from 'react'
import ClickableList from 'utils/ClickableList'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import CurrentlyDoingList from 'components/now/CurrentlyDoingList'
import CurrentlyLovingList from 'components/now/CurrentlyLovingList'

const nowPanelItems = [
  {
    id: 1,
    item: <Typography type='display1'> NOW </Typography>
  },

  {
    id: 2,
    item: <Typography>
      (This is a <a href='http://nownownow.com/about'>Now page</a>.
      Now pages are cool now.)
    </Typography>
  },

  {
    id: 3,
    item: <span>
      <Typography type='title'> Currently wrapping up four months of:</Typography>
      <CurrentlyDoingList />
    </span>
  },

  {
    id: 4,
    item: <span>
      <Typography type='title'> Currently in love with:</Typography>
      <CurrentlyLovingList />
    </span>
  }
]

const NowPanel = () => <VerticalGrid items={nowPanelItems} />

export default NowPanel

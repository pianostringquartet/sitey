import React from 'react'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'

const aboutPanelItems = [
  {
    id: 1,
    item: <Typography type='display1'>ABOUT</Typography>
  },
  {
    id: 2,
    item: <Typography>My name is Chris. I'm a philosopher-turned-developer.</Typography>
  },
  {
    id: 3,
    item: <Typography>CV here.</Typography>
  },
  {
    id: 4,
    item: <Typography>Was born and raised in Colorado USA.</Typography>
  },
  {
    id: 5,
    item: <Typography>Have lived and worked in New York, South Korea, France, Boston.</Typography>
  },
  {
    id: 6,
    item: <Typography>Ich ziehe im Januar 2018 nach Berlin um.</Typography>
  }
]

const AboutPanel = () => <VerticalGrid items={aboutPanelItems} />

export default AboutPanel

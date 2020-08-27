import React from 'react'
import { Grid, Icon, } from 'semantic-ui-react'

import { changeSlide } from '../../navigation'
import { HORIZONTAL_SLIDER_NAME, PROJECTS } from '../../navigation'

// would also need to take 'slide to the left,' and 'slide to the right'
const CenteringGrid = ({ content, leftSlide, rightSlide }) => (
  <Grid
    verticalAlign='middle'
    columns={3}
    centered
    style={{
      margin: 'auto',
      height: '100%',
      width: '75%'
    }}
  >

    {/* LEFT NAVIGATION ARROW */}
    <Grid.Column width={2}>
      <Icon
        name='angle left'
        size='huge'
        onClick={() => changeSlide(HORIZONTAL_SLIDER_NAME, leftSlide)}>
      </Icon>
    </Grid.Column>

    {/* SLIDE'S MAIN CONTENT */}
    <Grid.Column width={12}>
      {content}
    </Grid.Column>
    
    {/* RIGHT NAVIGATION ARROW */}
    <Grid.Column width={2}>
      <Icon
        name='angle right'
        size='huge'
        onClick={() => changeSlide(HORIZONTAL_SLIDER_NAME, rightSlide)}
      >
      </Icon>
    </Grid.Column>

  </Grid>
)

export default CenteringGrid
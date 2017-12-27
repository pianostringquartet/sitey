import React from 'react'

import { Header, Grid } from 'semantic-ui-react'

import CenteringGrid from 'utils/CenteringGrid'
import SlideNameTag from 'utils/SlideNameTag'

const cardyGithubURL = 'https://github.com/pianostringquartet/cardy'
const postyGithubURL = 'https://github.com/pianostringquartet/posty'

const Projects = () => (
  <Grid columns={3} stackable divided>

    <SlideNameTag color='orange' icon='hand lizard' content='PROJECTS' />

    <Grid.Row>
      <Grid.Column>
        <Header
          style={{cursor: 'pointer'}}
          onClick={() => window.open(mbamURL)} // to replace with link to blog...
        > 'How to do an abstraction layer'
          <Header.Subheader>summarizing lessons from writing API integrations at PriceIntelligently.</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header
          style={{cursor: 'pointer'}}
          onClick={() => window.open(cardyGithubURL)}
        > cardy
          <Header.Subheader> a flashcard app in Clojurescript + re-frame. </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header
          style={{cursor: 'pointer'}}
          onClick={() => window.open(postyGithubURL)}
        > posty
          <Header.Subheader>a blog and personal app in React + Redux.</Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default () => <CenteringGrid content={<Projects />} />

import React from 'react'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

const cardyGithubURL = 'https://github.com/pianostringquartet/cardy'
const postyGithubURL = 'https://github.com/pianostringquartet/posty'

// this panel will now be 'Code'
// it says everything you want to say about code, i.e.:
// it provides links to each github project you did (Cardy, Posty),
// as well as a link to a blog post that summarizes
const ProjectsGrid = () => (
  <Grid columns={3} divided>

    <Grid.Row>
      <Header color='orange'>
        <Icon name='hand peace' />
        PROJECTS
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Header> 'How to do an abstraction layer'
          <Header.Subheader>summarizing lessons from writing API integrations at PriceIntelligently.</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header> 'cardy'
          <Header.Subheader> a flashcard app in Clojurescript + re-frame. </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header> 'posty'
          <Header.Subheader>a blog and personal app in React + Redux.</Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>

)

const ProjectsPanel = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    <ProjectsGrid />
  </Grid>

)

export default ProjectsPanel

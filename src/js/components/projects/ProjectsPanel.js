import React from 'react'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import GithubProjectsList from 'components/projects/GithubProjectsList'

import PaperSheet from 'utils/PaperSheet'

// import Grid from 'material-ui/Grid'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

// this panel will now be 'Code'
// it says everything you want to say about code, i.e.:
// it provides links to each github project you did (Cardy, Posty),
// as well as a link to a blog post that summarizes
      //       <Grid.Column>
//        <GithubProjectsList />
  //    </Grid.Column>
const ProjectsGrid = () => (
  <Grid columns={3} divided>

    <Grid.Row>
      <Header color='blue'>
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

// const ProjectsGrid = ({items}) => (
//   <Grid container spacing={24}>
//     {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
//   </Grid>
// )

// const projectsPanelItems = [
//   {
//     id: 1,
//     item: <Typography type='display1'>PROJECTS</Typography>
//   },
//   {
//     id: 2,
//     item: <GithubProjectsList />
//   },
//   {
//     id: 3,
//     item:
//   <Typography>
//       Lessons learned from cardy and posty are summarized in the
//       "Your First Web App" post.
//     </Typography>
//   }
// ]

// export default () => <PaperSheet item={<ProjectsGrid items={projectsPanelItems} />} />

// // const ProjectsPanel = () => <VerticalGrid items={projectsPanelItems} />

// // export default ProjectsPanel

import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import CenteringGrid from 'utils/CenteringGrid'
import SlideNameTag from 'utils/SlideNameTag'
import { BLOG_NAME } from 'components/About'

const abstractionPostURL = 'https://' + BLOG_NAME + '#/How&to&do&an&abstraction&layer'
const cardyGithubURL = 'https://github.com/pianostringquartet/cardy'
const postyGithubURL = 'https://github.com/pianostringquartet/posty'
const siteyGithubURL = 'https://github.com/pianostringquartet/sitey'

const projectsListItems = [
  {
    id: 0,
    header: '\"How to do an abstraction layer\"',
    description: 'summarizing lessons from writing API integrations at PriceIntelligently / ProfitWell.',
    url: abstractionPostURL
  },
  {
    id: 1,
    header: 'cardy',
    description: 'a flashcard app in Clojurescript + re-frame.',
    url: cardyGithubURL
  },
  {
    id: 2,
    header: 'posty',
    description: 'a blog with Redux + Firebase.',
    url: postyGithubURL
  },
  {
    id: 3,
    header: 'sitey',
    description: 'a personal site with Fullpage.js + Semantic UI.',
    url: siteyGithubURL
  }
]

// TODO:
// Set # of columns by # of members in projects, not manually
const Projects = () => (
  <Grid columns={4} stackable divided>
    <SlideNameTag color='orange' icon='hand lizard' content='PROJECTS' />
    <Grid.Row>
      {projectsListItems.map(project =>
        <Grid.Column key={project.id}>
          <Header href={project.url} target='_blank'>
            {project.header}
            <Header.Subheader> {project.description} </Header.Subheader>
          </Header>
        </Grid.Column>)}
    </Grid.Row>
  </Grid>
)

export default () => <CenteringGrid content={<Projects />} />

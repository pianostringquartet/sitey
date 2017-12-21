import React from 'react'
import ClickableList from 'utils/ClickableList'
import Typography from 'material-ui/Typography'

const cardyGithubURL = 'https://github.com/pianostringquartet/cardy'
const postyGithubURL = 'https://github.com/pianostringquartet/posty'

const GithubProjectsList = () => (
  <ClickableList
    items={
    [
      {
        displayable: 'cardy: flashcard app',
        callable: () => window.open(cardyGithubURL)
      },
      {
        displayable: 'posty: blog platform',
        callable: () => window.open(postyGithubURL)
      }
    ]
    }
  />
)

const ProjectsPanel = () => (
  <div>
    <Typography type='display1'>
      PROJECTS
    </Typography>

    <GithubProjectsList />

    <Typography>
      The lessons learned from writing cardy and posty were summarized in a "Your First Web App" blog post.
    </Typography>
  </div>
)

export default ProjectsPanel

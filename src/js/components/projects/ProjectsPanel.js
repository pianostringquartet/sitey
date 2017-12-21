import React from 'react'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import GithubProjectsList from 'components/projects/GithubProjectsList'

const projectsPanelItems = [
  {
    id: 1,
    item: <Typography type='display1'>PROJECTS</Typography>
  },
  {
    id: 2,
    item: <GithubProjectsList />
  },
  {
    id: 3,
    item:
  <Typography>
      Lessons learned from cardy and posty are summarized in the
      "Your First Web App" post.
    </Typography>
  }
]

const ProjectsPanel = () => <VerticalGrid items={projectsPanelItems} />

export default ProjectsPanel

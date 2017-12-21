import React from 'react'
import ClickableList from 'utils/ClickableList'

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

export default GithubProjectsList

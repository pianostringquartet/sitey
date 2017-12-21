import React from 'react'
import ClickableList from 'utils/ClickableList'

const rossoURL = 'https://it.wikipedia.org/wiki/Cristo_risorto_in_gloria'
const pontormoURL = 'http://www.arttrav.com/florence/pontormo-visitation/'
const simpleMadeEasyURL = 'https://www.infoq.com/presentations/Simple-Made-Easy'
const beatingTheAveragesURL = 'http://www.paulgraham.com/avg.html'
const ladderOfAbstractionURL = 'http://worrydream.com/LadderOfAbstraction/'

const CurrentlyLovingList = () => (
  <ClickableList
    items={
    [
      {
        displayable: 'Rosso',
        callable: () => window.open(rossoURL)
      },
      {
        displayable: 'Pontormo',
        callable: () => window.open(pontormoURL)
      },
      {
        displayable: 'Rich Hickey: Simple Made Easy',
        callable: () => window.open(simpleMadeEasyURL)
      },
      {
        displayable: 'Paul Graham: Beating the Averages',
        callable: () => window.open(beatingTheAveragesURL)
      },
      {
        displayable: 'Bret Victor: The Ladder of Abstraction',
        callable: () => window.open(ladderOfAbstractionURL)
      }
    ]
    }
  />
)

export default CurrentlyLovingList

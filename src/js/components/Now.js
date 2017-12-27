import React from 'react'
import { List, Grid, Header, Card, Icon, Image } from 'semantic-ui-react'

import CenteringGrid from 'utils/CenteringGrid'
import SlideNameTag from 'utils/SlideNameTag'
import HideOnMobile from 'utils/HideOnMobile'

import pontormoImage from 'assets/pontormo-sacra-conversazione.jpg'
import jsImage from 'assets/js_logo.png'
import cljsImage from 'assets/clojure_logo.png'

const pontormoURL = 'https://en.wikipedia.org/wiki/Pontormo'
const jsURL = 'https://redux.js.org/'
const cljsURL = 'http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs'
const simpleMadeEasyURL = 'https://www.infoq.com/presentations/Simple-Made-Easy'
const beatingTheAveragesURL = 'http://www.paulgraham.com/avg.html'
const ladderOfAbstractionURL = 'http://worrydream.com/LadderOfAbstraction/'

const currentLovesListItems = [
  {
    id: 0,
    header: 'Rick Hickey: Simple Made Easy',
    description: 'Building better systems.',
    url: simpleMadeEasyURL
  },
  {
    id: 1,
    header: 'Paul Graham: Beating the Averages',
    description: 'Why your tools matter.',
    url: beatingTheAveragesURL
  },
  {
    id: 2,
    header: 'Bret Victor: The Lader of Abstraction',
    description: 'What tools ought to let us do.',
    url: ladderOfAbstractionURL
  }
]

const CurrentLovesList = ({ items }) => (
  <List relaxed size='large'>
    {items.map(item =>
      <List.Content key={item.id}>
        <br />
        <List.Header href={item.url}> {item.header} </List.Header>
        <List.Description> {item.description} </List.Description>
      </List.Content>)}
  </List>
)

const PontormoImage = () =>
  <Image src={pontormoImage} href={pontormoURL} target='_blank' />

const CljsImage = () =>
  <Image spaced src={cljsImage} href={cljsURL} target='_blank' />

const JsImage = () =>
  <Image spaced src={jsImage} href={jsURL} target='_blank' />

const NowSlide = () => (
  <Grid columns={2} stackable relaxed>

    <SlideNameTag color='red' icon='hand spock' content='NOW' />

    <Grid.Column>
      <HideOnMobile content={<PontormoImage />} />
    </Grid.Column>

    <Grid.Column>
      <Grid>
        <Grid.Row>
          <Image.Group size='small'>
            <JsImage />
            <CljsImage />
          </Image.Group>
        </Grid.Row>
        <Grid.Row >
          <CurrentLovesList items={currentLovesListItems} />
        </Grid.Row>
        <Grid.Row>
          <br />
          <Header color='red'>
            Ich ziehe im Januar 2018 nach Berlin um.
          </Header>
        </Grid.Row>
      </Grid>
    </Grid.Column>

  </Grid>
)

export default () => <CenteringGrid content={<NowSlide />} />

import React from 'react'

import { List, Grid, Header, Card, Icon, Image } from 'semantic-ui-react'

import pontormoImage from 'assets/pontormo-sacra-conversazione.jpg'
import jsImage from 'assets/js_logo.png'
import cljsImage from 'assets/clojure_logo.png'

const pontormoURL = 'https://en.wikipedia.org/wiki/Pontormo'
const jsURL = 'https://redux.js.org/'
const cljsURL = 'http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs'

const simpleMadeEasyURL = 'https://www.infoq.com/presentations/Simple-Made-Easy'
const beatingTheAveragesURL = 'http://www.paulgraham.com/avg.html'
const ladderOfAbstractionURL = 'http://worrydream.com/LadderOfAbstraction/'

const CurrentLovesList = () => (
  <List relaxed>

    <List.Item>
      <List.Content>
        <List.Header href={simpleMadeEasyURL}>
          Rick Hickey: Simple Made Easy
        </List.Header>
        <List.Description> Building better systems. </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header href={beatingTheAveragesURL}>
          Paul Graham: Beating the Averages
        </List.Header>
        <List.Description> Why your tools matter. </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header href={ladderOfAbstractionURL}>
          Bret Victor: The Lader of Abstraction
        </List.Header>
        <List.Description> What tools ought to let us do. </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      Ich ziehe im Januar 2018 nach Berlin um.
    </List.Item>

  </List>
)

const NowGrid = () => (
  <Grid columns={2} stackable relaxed>

    <Grid.Row>
      <Header color='red'>
        <Icon name='hand peace' />
        NOW
      </Header>
    </Grid.Row>

    <Grid.Column>
      <Image
        src={pontormoImage}
        size='large'
        onClick={() => window.open(pontormoURL)}
         />
    </Grid.Column>

    <Grid.Column>
      <Grid>
        <Grid.Row>
          <Image.Group size='small'>
            <Image
              src={jsImage}
              spaced
              onClick={() => window.open(jsURL)}
            />
            <Image
              src={cljsImage}
              spaced
              onClick={() => window.open(cljsURL)}
            />
          </Image.Group>
        </Grid.Row>

        <Grid.Row >
          <CurrentLovesList />
        </Grid.Row>
      </Grid>
    </Grid.Column>

  </Grid>
)

const NowPanel = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
    >
    <NowGrid />
  </Grid>
)

export default NowPanel

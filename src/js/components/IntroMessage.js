import React, {Component} from 'react'
import Typist from 'react-typist'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

import { Header, Grid, Card, Container } from 'semantic-ui-react'

const introLines = [
  {
    id: 0,
    isEval: false,
    delay: 0,
    text: '> (require \'[chris.life.core :as chris])'
  },
  {
    id: 1,
    isEval: false,
    delay: 5000,
    text: '> (instance? Human chris/chris-clampitt)'
  },
  {
    id: 2,
    isEval: true,
    delay: 10000,
    text: 'true'
  },
  {
    id: 3,
    isEval: false,
    delay: 11000,
    text: '> (:last-four-months chris/life)'
  },
  {
    id: 4,
    isEval: true,
    delay: 15000,
    text: '[traveling painting coding]'
  },
  {
    id: 5,
    isEval: false,
    delay: 17000,
    text: '> (chris/message-for-friends)'
  },
  {
    id: 6,
    isEval: true,
    delay: 20500,
    text: '"Scroll down :-)"'
  }
]

const messageByLine = lines => (
  lines.map(line =>
    <Typist
      key={line.id}
      avgTypingDelay={line.isEval ? 0 : 100}
      cursor={{
        show: false,
        blink: false,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 1000}}
    >
      <Typist.Delay ms={line.delay} />
      <Header
        as='h2'
        color={line.isEval ? 'orange' : 'black'}
      >
        {line.text}
      </Header>

    </Typist>)
)

      // {line.isEval
      //   ? <Typography color='accent'>{line.text}</Typography>
      //   : <Typography>{line.text}</Typography>}

// const MessageCard = () => (
//   <Card raised >
//     <Card.Content textAlign='left'>
//       {messageByLine(introLines)}
//     </Card.Content>
//   </Card>
// )

// const MessageCard = () => (
//   <Card raised >
//     <Card.Content textAlign='left'>
//       {messageByLine(introLines)}
//     </Card.Content>
//   </Card>
// )

// export default () => messageByLine(introLines)

{ /* <Container fluid text textAlign='left'> */ }
// export default () => (
//   <Grid container centered columns={1}>
//     <Grid.Column textAlign='left'>
//       {messageByLine(introLines)}
//     </Grid.Column>
//   </Grid>
// )

export default () => (
  <Grid
    container
    centered
    columns={1}
  >
    <Grid.Column
      textAlign='left'
      style={{
        fontSize: '4em', // why does this contribute to centering? what is '4em'?
        marginBottom: 0,
        marginTop: '3em' }}
    >
      {messageByLine(introLines)}
    </Grid.Column>
  </Grid>
)

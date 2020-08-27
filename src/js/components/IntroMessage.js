import React, {Component} from 'react'
import Typist from 'react-typist'
import { Header, Grid } from 'semantic-ui-react'

/*
Pseudo Clojure REPL introduction:
- Illusion of user typing vs. eval is created by different typing speeds.
- A new typing speed requires a new Typist component,
    so we use delays to make Typists type in sequence instead of concurrently.
*/
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
    text: '> (:fun chris/life)'
  },
  {
    id: 4,
    isEval: true,
    delay: 13500,
    text: '[traveling painting coding]'
  },
  {
    id: 5,
    isEval: false,
    delay: 15000,
    text: '> (chris/message-for-friends)'
  },
  {
    id: 6,
    isEval: true,
    delay: 19000,
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
      <Header as='h2' color={line.isEval ? 'orange' : 'black'}>
        {line.text}
      </Header>
    </Typist>)
)

export default () => (
  <Grid container centered columns={1}>
    <Grid.Column
      textAlign='left'
      style={{
        fontSize: '4em',
        marginBottom: 0,
        marginTop: '3em' }}
    >
      {messageByLine(introLines)}
    </Grid.Column>
  </Grid>
)

import React from 'react'
import ClickableList from 'utils/ClickableList'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import CurrentlyDoingList from 'components/now/CurrentlyDoingList'
import CurrentlyLovingList from 'components/now/CurrentlyLovingList'

import PaperSheet from 'utils/PaperSheet'

import pontormoImage from '../../../../public/assets/pontormo-sacra-conversazione.jpg'
import jsImage from '../../../../public/assets/js_logo.png'
import cljsImage from '../../../../public/assets/clojure_logo.png'

// import Grid from 'material-ui/Grid'

import { List, Grid, Header, Card, Icon, Image } from 'semantic-ui-react'

const simpleMadeEasyURL = 'https://www.infoq.com/presentations/Simple-Made-Easy'
const beatingTheAveragesURL = 'http://www.paulgraham.com/avg.html'
const ladderOfAbstractionURL = 'http://worrydream.com/LadderOfAbstraction/'

// <Grid.Column>
  //      (This is a <a href='http://nownownow.com/about'>Now page</a>.
    //  Now pages are cool now.)
//      </Grid.Column>

// Currently wrapping up four months of:
//         <CurrentlyDoingList />

// Currently in love with:
//         <CurrentlyLovingList />

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

// <a href={simpleMadeEasyURL}>Rick Hickey Simple Made Easy</a>

const NowGrid = () => (
  <Grid columns={2} relaxed>

    <Grid.Row>
      <Header color='purple'>
        <Icon name='hand peace' />
        NOW
      </Header>
    </Grid.Row>

    <Grid.Column>
      <Image src={pontormoImage} size='large' />
    </Grid.Column>

    <Grid.Column>
      <Grid>
        <Grid.Row>
          <Image.Group size='small'>
            <Image src={jsImage} spaced />
            <Image src={cljsImage} spaced />
          </Image.Group>
        </Grid.Row>

        <Grid.Row >
          <CurrentLovesList />
          {/* <Header as='h4'
            onClick={() => window.open(simpleMadeEasyURL)}
          >
            Rich Hickey: Simple Made Easy
          </Header>
          <Header as='h4'
            onClick={() => window.open(beatingTheAveragesURL)}
            >Paul Graham: Beating The Averages
            </Header>
          <Header
            as='h4'
            onClick={() => window.open(ladderOfAbstractionURL)}
            >
            Bret Victor: The Ladder of Abstraction
            </Header>
          <Header as='h4'>
              Ich ziehe im Januar 2018 nach Berlin um.
          </Header> */}
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

// const NowGrid = ({items}) => (
//   <Grid container spacing={24}>
//     {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
//   </Grid>
// )

// const nowPanelItems = [
//   {
//     id: 1,
//     item: <Typography type='display1'> NOW </Typography>
//   },

//   {
//     id: 2,
//     item: <Typography>
//       (This is a <a href='http://nownownow.com/about'>Now page</a>.
//       Now pages are cool now.)
//     </Typography>
//   },

//   {
//     id: 3,
//     item: <span>
//       <Typography type='title'> Currently wrapping up four months of:</Typography>
//       <CurrentlyDoingList />
//     </span>
//   },

//   {
//     id: 4,
//     item: <span>
//       <Typography type='title'> Currently in love with:</Typography>

//     </span>
//   }
// ]

// export default () => <PaperSheet item={<NowGrid items={nowPanelItems} />} />

// const NowPanel = () => <VerticalGrid items={nowPanelItems} />

// export default NowPanel

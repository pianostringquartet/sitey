import React from 'react'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

import profileImage from '../../../public/assets/profile_image.jpg'

import { List } from 'semantic-ui-react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSlide } from 'actions/Actions'
import { HORIZONTAL_SLIDER_NAME } from 'reducers/navigation'

import { Fullpage } from 'fullpage-react'
const { changeHorizontalSlide } = Fullpage

// ok, so this works.
// this is a very interesting way of handling the State of H-Slides.
// basically, we identify the row of horizontal slides by name
// (here, 'horizontalSlider1').
// so, we can change the H Slide from anywhere else in the code.

const ProfileList = () => (
  <List>
    <List.Item>
      <List.Icon name='linkedin' />
      <List.Content>linkedin</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>angel's list</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>CV</List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>sketches, paintings</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:christian.clampitt@nyu.edu'>christian.clampitt@nyu.edu</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' />
      <List.Content>
        <a href='https://github.com/pianostringquartet/'>github/pianostringquartet</a>
      </List.Content>
    </List.Item>
  </List>
)

// ideally we could explicitly manage the HSlider's state;
// for now, our workaround is to treat changeHorizontalSlide as "side effects"
// i.e. we have an action for them, and that action

// pros of this approach:
// -- the state is more closely managed by Redux; we might not be using a store,
// but we are using "events", and so we can say "the H slide changed because of an event"

// cons of this approach:

// <span onClick={actions.changeSlide('horizontalSlider1', 2)}>
  //      <Header> Go to third H slide </Header>
    //  </span>
const ChrisLifeGrid = ({actions}) => (
  <Grid columns={2}>
    <Grid.Column>
      <Image src={profileImage} size='small' />
      <ProfileList />
    </Grid.Column>
    <Grid.Column>
      <Header as='h3'>
        Hi, I'm Chris. Let's build something together.
      </Header>

      <span onClick={() => actions.changeSlide(HORIZONTAL_SLIDER_NAME, 2)}>
        <Header> Go to third H slide via direct call. </Header>
      </span>

      <Header as='h3'>
        Get in touch.
      </Header>
      <Header as='h3'>
        See some code.
      </Header>
      <Header as='h3'>
        Read the blog.
      </Header>
      <Header as='h3'>
        What I'm doing and loving now.
      </Header>
    </Grid.Column>
  </Grid>
)

// add 'fluid' to Card to allow Card to take up size of container
// <Image src={profileImage} size='small' />
// const ChrisLifeCard = () => (
//   <Card fluid>
//     <ChrisLifeGrid />
//   </Card>
// )

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeSlide }, dispatch)
})

const ConnectedChrisLifeGrid = connect(
  null,
  mapDispatchToProps
)(ChrisLifeGrid)

// <ChrisLifeGrid />
const ChrisLifeCard = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    <ConnectedChrisLifeGrid />
  </Grid>
)

export default ChrisLifeCard

// const ChrisLifeCard = () => (
//   <Card fluid>
//     <Image src={profileImage} size='small' />

//     <Card.Content>
//       <Card.Header>
//         Hi, I'm Chris.
//       </Card.Header>
//       <Card.Meta>
//         <span className='date'>
//           Born 1989
//         </span>
//       </Card.Meta>
//       <Card.Description>
//         Get in touch: cjc500@nyu.edu
//       </Card.Description>
//     </Card.Content>

//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         No friends.
//       </a>
//     </Card.Content>
//   </Card>
// )

import React from 'react'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

import profileImage from '../../../public/assets/profile_image.jpg'

import { List } from 'semantic-ui-react'

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

const ChrisLifeGrid = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Image src={profileImage} size='small' />
      <ProfileList />
    </Grid.Column>
    <Grid.Column>
      <Header as='h3'>
        Hi, I'm Chris. Let's build something together.
      </Header>
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

const ChrisLifeCard = () => (
  <Grid
    container
    centered
    textAlign='center'
    style={{ height: '100%' }}
    verticalAlign='middle'
  >
    <ChrisLifeGrid />
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

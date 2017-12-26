import React from 'react'
import { Segment, List, Header, Grid, Card, Icon, Image } from 'semantic-ui-react'
import { HORIZONTAL_SLIDER_NAME, NOW_PANEL, PROJECTS_PANEL, ABOUT_PANEL } from '../navigation'
import profileImage from 'assets/profile_image.jpg'

const angelListURL = 'https://angel.co/christian-clampitt'
const mbamURL = 'https://www.mbam.qc.ca'
const artURL = 'https://ccbilder.tumblr.com/'
const mailURL = 'mailto:christian.clampitt@nyu.edu'
const githubURL = 'https://github.com/pianostringquartet/'

const ProfileList = () => (
  <List>
    <List.Item>
      <List.Icon name='linkedin square' />
      <List.Content>LinkedIn</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='angellist' />
      <List.Content>
        <a href={angelListURL}>angel.co/christian-clampitt</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='sticky note' />
      <List.Content>CV</List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='paint brush' />
      <List.Content>
        <a href={artURL}>sketches, paintings</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href={mailURL}>christian.clampitt@nyu.edu</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' />
      <List.Content>
        <a href={githubURL}>github/pianostringquartet</a>
      </List.Content>
    </List.Item>
  </List>
)

const ChrisLifeGrid = () => (
  <Grid stackable columns={2}>

    <Grid.Row>
      <Header color='green'>
        <Icon name='hand peace' />
        ABOUT
      </Header>
    </Grid.Row>

    <Grid.Column width={6}>
      <Image src={profileImage} size='small' />
      <ProfileList />
    </Grid.Column>

    <Grid.Column>

      <Header as='h3'>
        Hi, I'm Chris.
        <Header size='tiny'>
          Let's build something together!
        </Header>
      </Header>

      <Header color='orange' onClick={() => changeSlide(HORIZONTAL_SLIDER_NAME, PROJECTS_PANEL)}>
          See some code.
          </Header>
      <Header color='purple' onClick={() => window.open(mbamURL)}>
            Read the blog.
          </Header>
      <Header color='red' onClick={() => changeSlide(HORIZONTAL_SLIDER_NAME, NOW_PANEL)}>
            What I'm doing now.
          </Header>
      <Header as='h3' color='black'>
        <a href='mailto:christian.clampitt@nyu.edu'>Get in touch.</a>
      </Header>
    </Grid.Column>

  </Grid>
)

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

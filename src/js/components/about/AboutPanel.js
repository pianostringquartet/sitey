import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSlide } from 'actions/Actions'

import { List, Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

import {
  BLOG_SUBAPP,
  HORIZONTAL_SLIDER_NAME, NOW_PANEL,
  PROJECTS_PANEL, BLOG_PANEL, ABOUT_PANEL } from 'reducers/navigation'

import { Fullpage } from 'fullpage-react'

import profileImage from 'assets/profile_image.jpg'

const { changeHorizontalSlide } = Fullpage

const mbamURL = 'https://www.mbam.qc.ca'

const ProfileList = () => (
  <List>
    <List.Item>
      <List.Icon name='linkedin square' />
      <List.Content>LinkedIn</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='angellist' />
      <List.Content>
        <a href='https://angel.co/christian-clampitt'>angel.co/christian-clampitt</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='sticky note' />
      <List.Content>CV</List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='paint brush' />
      <List.Content>
        <a href='https://ccbilder.tumblr.com/'>sketches, paintings</a>
      </List.Content>
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

const ChrisLifeGrid = ({actions}) => (
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
      </Header>
      <Header as='h3'>
        Let's build something together:
      </Header>

      <Header color='orange' onClick={() => actions.changeSlide(HORIZONTAL_SLIDER_NAME, PROJECTS_PANEL)}>
          See some code.
          </Header>
      <Header color='purple' onClick={() => window.open(mbamURL)}>
            Read the blog.
          </Header>
      <Header color='red' onClick={() => actions.changeSlide(HORIZONTAL_SLIDER_NAME, NOW_PANEL)}>
            What I'm doing now.
          </Header>
      <Header as='h3' color='black'>
        <a href='mailto:christian.clampitt@nyu.edu'>Get in touch.</a>
      </Header>
    </Grid.Column>

  </Grid>
)

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

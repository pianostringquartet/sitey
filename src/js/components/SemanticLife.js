import React from 'react'

import { Header, Grid, Card, Icon, Image } from 'semantic-ui-react'

import profileImage from '../../../public/assets/profile_image.jpg'

import { List } from 'semantic-ui-react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSlide } from 'actions/Actions'
import {
  HORIZONTAL_SLIDER_NAME, NOW_PANEL,
  PROJECTS_PANEL, BLOG_PANEL, ABOUT_PANEL } from 'reducers/navigation'

import { Fullpage } from 'fullpage-react'
const { changeHorizontalSlide } = Fullpage

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
      <Header as='h3'>
        Get in touch.
      </Header>
      <Header onClick={() => actions.changeSlide(HORIZONTAL_SLIDER_NAME, PROJECTS_PANEL)}>
          See some code.
      </Header>
      <Header onClick={() => actions.changeSlide(HORIZONTAL_SLIDER_NAME, BLOG_PANEL)}>
        Read the blog.
      </Header>
      <Header onClick={() => actions.changeSlide(HORIZONTAL_SLIDER_NAME, NOW_PANEL)}>
        Now page.
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

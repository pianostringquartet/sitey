import React from 'react'
import { List, Header, Grid, Card, Icon, Image } from 'semantic-ui-react'
import profileImage from 'assets/berlin_profile.jpg'
import CenteringGrid from 'utils/CenteringGrid'
import SlideNameTag from 'utils/SlideNameTag'
import HideOnMobile from 'utils/HideOnMobile'
import { changeSlide } from '../navigation'
import { HORIZONTAL_SLIDER_NAME, NOW, PROJECTS } from '../navigation'

export const BLOG_NAME = 'chrisclampittblog.life/'
const linkedInURL = 'https://www.linkedin.com/in/christian-clampitt'
const angelListURL = 'https://angel.co/christian-clampitt'
const cvURL = 'https://chrisclampitt.life/#/cv'
const artURL = 'https://www.instagram.com/christian.clampitt/'
const mailURL = 'mailto:christian.clampitt@nyu.edu'
const githubURL = 'https://github.com/pianostringquartet/'
const blogURL = 'https://' + BLOG_NAME

const profileListItems = [
  {
    id: 0,
    icon: 'linkedin square',
    url: linkedInURL,
    content: 'linkedin.com/in/christian-clampitt'
  },
  {
    id: 1,
    icon: 'angellist',
    url: angelListURL,
    content: 'angel.co/christian-clampitt'
  },
  {
    id: 2,
    icon: 'sticky note',
    url: cvURL,
    content: 'CV'
  },
  {
    id: 3,
    icon: 'paint brush',
    url: artURL,
    content: 'sketches, paintings'
  },
  {
    id: 4,
    icon: 'mail',
    url: mailURL,
    content: 'christian dot clampitt at nyu dot edu'
  },
  {
    id: 5,
    icon: 'github',
    url: githubURL,
    content: 'github - pianostringquartet'
  }
]

const ProfileList = ({ items }) =>
  <List animated size='small'>
    {items.map(item =>
      <List.Item key={item.id}>
        <List.Icon name={item.icon} />
        <List.Content>
          <a href={item.url} target='_blank'>{item.content}</a>
        </List.Content>
      </List.Item>)}
  </List>

const ProfileCard = () =>
  <Card raised>
    <HideOnMobile content={<Image centered size='medium' src={profileImage} />} />
    <Card.Content>
      <ProfileList items={profileListItems} />
    </Card.Content>
  </Card>

const PortfolioCard = () =>
  <Card raised>
    <Card.Content>
      <Header as='h1'>
        Hi, I'm Chris.
      </Header>
      <Header as='h2'>
        Let's build something:
      </Header>
      <Header
        color='orange'
        style={{ cursor: 'pointer' }}
        onClick={() => changeSlide(HORIZONTAL_SLIDER_NAME, PROJECTS)}>
        See some code.
      </Header>
      <Header color='purple' href={blogURL} target='_blank'>
        Read the blog.
      </Header>
      <Header
        color='red'
        style={{ cursor: 'pointer' }}
        onClick={() => changeSlide(HORIZONTAL_SLIDER_NAME, NOW)}>
        What I'm doing now.
      </Header>
      <Header color='green' href={mailURL} target='_blank'>
        Get in touch.
      </Header>
    </Card.Content>
  </Card>

const About = () => (
  <Grid>
    <Grid.Row>
      <SlideNameTag color='green' icon='hand peace' content='ABOUT' />
    </Grid.Row>
    <Grid.Row>
      <Grid stackable columns={2} padded centered>
        <Grid.Column width={7}>
          <ProfileCard />
        </Grid.Column>
        <Grid.Column width={7}>
          <PortfolioCard />
        </Grid.Column>
      </Grid>
    </Grid.Row>
  </Grid >
)

export default () => <CenteringGrid content={<About />} />
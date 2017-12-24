import React from 'react'
import Typography from 'material-ui/Typography'
import VerticalGrid from 'utils/VerticalGrid'
import Avatar from 'material-ui/Avatar'

import Grid from 'material-ui/Grid'

import PaperSheet from 'utils/PaperSheet'

import profileImage from '../../../../public/assets/profile_image.jpg'

const ProfilePicture = () =>
  <Avatar
    alt='Christian Clampitt'
    src={profileImage}
    style={{width: 200, height: 200}}
  />

// const aboutPanelItems = [
//   {
//     id: 0,
//     item: <ProfilePicture />
//   },
//   {
//     id: 1,
//     item: <Typography type='display1'>ABOUT</Typography>
//   },
//   {
//     id: 2,
//     item: <Typography>My name is Chris. I'm a philosopher-turned-developer.</Typography>
//   },
//   {
//     id: 3,
//     item: <Typography>CV here.</Typography>
//   },
//   {
//     id: 4,
//     item: <Typography>Born and raised in Colorado USA.</Typography>
//   },
//   {
//     id: 5,
//     item: <Typography>Lived and worked in New York, South Korea, France, Boston.</Typography>
//   },
//   {
//     id: 6,
//     item: <Typography>Ich ziehe im Januar 2018 nach Berlin um.</Typography>
//   }
// ]

const leftItems = [
  {
    id: 0,
    item: <ProfilePicture />
  },
  {
    id: 1,
    item: 'Contact me: cjc500@nyu.edu'
  }
]

const rightItems = [
  {
    id: 2,
    item: <Typography>My name is Chris. I'm a philosopher-turned-developer.</Typography>
  },
  {
    id: 3,
    item: <Typography>CV here.</Typography>
  },
  {
    id: 4,
    item: <Typography>Born and raised in Colorado USA.</Typography>
  },
  {
    id: 5,
    item: <Typography>Lived and worked in New York, South Korea, France, Boston.</Typography>
  },
  {
    id: 6,
    item: <Typography>Ich ziehe im Januar 2018 nach Berlin um.</Typography>
  }
]

const AboutGridLeft = ({items}) => (
  <Grid container direction='column' spacing={24}>
    {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
  </Grid>
)

const AboutGridRight = ({items}) => (
  <Grid container direction='column' spacing={24}>
    {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
  </Grid>
)

const AboutGrid = () => (
  <Grid container direction='row' spacing={24}>
    <AboutGridLeft items={leftItems} />
    <AboutGridRight items={rightItems} />
  </Grid>
)

// const AboutGrid = ({items}) => (
//   <Grid container spacing={24}>
//     {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
//   </Grid>
// )

// might not need grid?
// or, Paper should contain Grid?
// const AboutGrid = ({items}) => (
//   <Grid container spacing={24}>
//     {items.map(x => (<Grid item key={x.id}> {x.item} </Grid>))}
//   </Grid>
// )

// export default () => <PaperSheet item={<AboutGrid items={aboutPanelItems} />} />
export default () => <PaperSheet item={<AboutGrid />} />

// OLD:

// const aboutPanelItems = [
//   {
//     id: 1,
//     item: <Typography type='display1'>ABOUT</Typography>
//   },
//   {
//     id: 2,
//     item: <Typography>My name is Chris. I'm a philosopher-turned-developer.</Typography>
//   },
//   {
//     id: 3,
//     item: <Typography>CV here.</Typography>
//   },
//   {
//     id: 4,
//     item: <Typography>Was born and raised in Colorado USA.</Typography>
//   },
//   {
//     id: 5,
//     item: <Typography>Have lived and worked in New York, South Korea, France, Boston.</Typography>
//   },
//   {
//     id: 6,
//     item: <Typography>Ich ziehe im Januar 2018 nach Berlin um.</Typography>
//   }
// ]

// const AboutPanel = () => <VerticalGrid items={aboutPanelItems} />

// export default AboutPanel

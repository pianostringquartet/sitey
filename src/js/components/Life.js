import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Code from 'material-ui-icons/Code'

import profileImage from '../../../public/assets/profile_image.jpg'
import keenImage from '../../../public/assets/keen.png'
import florenceImage from '../../../public/assets/florence_1.jpg'
import florence2Image from '../../../public/assets/florence_2.jpg'

import Grid from 'material-ui/Grid'

import LifeGridList from 'components/LifeGridList'

const myGithubProfileURL = 'https://github.com/pianostringquartet'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'left',
    padding: 20
  },
  Avatar: {
    width: 200,
    height: 200
  }
}

const ProfilePicture = () => (
  <Avatar
    alt='Christian Clampitt'
    src={profileImage}
    style={{width: 200, height: 200}}
  />
)

// the whole panel will need to be carefully structured as a grid

// you're not sure how things will fit

// so write the comps separately so you can put them on
// different slides if need be

const Profile = ({classes}) => (
  <div>
    <div className={classes.row}>
      <Avatar
        alt='Christian Clampitt'
        src={profileImage}
        className={classNames(classes.avatar, classes.Avatar)}
      />
    </div>
    <div className={classes.row}>
      <Typography>
        Contact me: cjc500@nyu.edu
      </Typography>
      <Button onClick={() => window.open(myGithubProfileURL)}>
        <Code />
      </Button>
    </div>
  </div>
)

// export default withStyles(styles)(Profile)
export default ProfilePicture

// const tileData = [
//   {
//     img: profileImage,
//     title: 'Profile',
//     author: 'auteur'
//   },
//   {
//     img: keenImage,
//     title: 'Keen',
//     author: 'tutorial'
//   },
//   {
//     img: florenceImage,
//     title: 'Florence',
//     author: 'firenze'
//   },
//   {
//     img: florence2Image,
//     title: 'Florence 2',
//     author: 'firenze 2'
//   }

// ]

const GridWithData = () => <LifeGridList tileData={tileData} />

// export default LifeGridList(tileData)
// export default LifeGridList
// export default GridWithData
// export default () => <LifeGridList tileData=tileData />

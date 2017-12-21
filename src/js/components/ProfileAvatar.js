import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Code from 'material-ui-icons/Code'
import profileImage from '../../../public/assets/profile_image.jpg'

const myGithubProfileURL = 'https://github.com/pianostringquartet'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  },
  Avatar: {
    width: 200,
    height: 200
  }
}

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
        cjc500@nyu.edu
      </Typography>
      <Button onClick={() => window.open(myGithubProfileURL)}>
        <Code />
      </Button>
    </div>
  </div>
)

export default withStyles(styles)(Profile)

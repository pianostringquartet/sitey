import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import profileImage from '../../assets/profile_image.jpg';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },
  Avatar: {
    width: 200,
    height: 200,
  },
};

const ProfileImage = ({classes}) => (
  <div>
    <div className={classes.row}>
      <Avatar
        alt="Christian Clampitt"
        src={profileImage}
        className={classNames(classes.avatar, classes.Avatar)}
      />
    </div>
    <div className={classes.row}>

      <Typography>
        Contact me: cjc500@nyu.edu
      </Typography>

    </div>
  </div>
)

export default withStyles(styles)(ProfileImage);

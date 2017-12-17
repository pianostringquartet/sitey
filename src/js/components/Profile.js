import React from 'react'
import { withStyles } from 'material-ui/styles';

import profileImage from '../../assets/profile_image.jpg';



// for now, hardcode your picture and contact info;
// that data doesn't change
const Profile = () => (
  <div>
    <img src={ profileImage } alt='Profile Image' />
    <div>
      Contact me at cjc500@nyu.edu
    </div>
  </div>
)
// Contact me at cjc500@nyu.edu

export default Profile

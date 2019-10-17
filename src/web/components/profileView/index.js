import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { ProfileViewStyle } from './style';

class ProfileView extends Component {

  render() {

    return (
      <div>
        <Avatar className="avatar">H</Avatar>
        <div className="avatarName">Ankita Chavan <span>anky@gmail.com</span></div>
      </div>
    );
  }
}

export default ProfileView;
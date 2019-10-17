import React, { Component } from 'react';
import { RightPanelStyle } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Notification from "../notification/index"
import ProfileView from "../profileView/index"

class RightPanel extends Component {

  render() {

    return (
      <RightPanelStyle>
        <Grid sm={12} className="gridheight30 top">
          <Grid container justify="center" alignItems="center" className="userProfile">
          <ProfileView></ProfileView>
          </Grid>
        </Grid>
        <Grid sm={12} className="gridheight50 bottom">
          <Notification></Notification>
        </Grid>
      </RightPanelStyle>
    );
  }
}

export default RightPanel;
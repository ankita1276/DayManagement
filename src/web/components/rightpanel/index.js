import React, { Component } from 'react';
import { RightPanelStyle } from './style';
import Grid from '@material-ui/core/Grid';

class RightPanel extends Component {
    render() {
        return (
            <RightPanelStyle>
                <Grid sm={12} className="gridheight50 top">
                    Profile
                </Grid>
                <Grid sm={12} className="gridheight50 bottom">
                    Notifications
                </Grid>
            </RightPanelStyle>
        );
    }
}

export default RightPanel;
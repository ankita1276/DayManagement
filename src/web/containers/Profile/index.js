import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Grid from '@material-ui/core/Grid';



class Profile extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2} xl={2}>
                        <Navbar></Navbar>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Profile;
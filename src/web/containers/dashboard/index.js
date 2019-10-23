import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import SummaryReport from '../../components/summaryreport';
import RightPanel from '../../components/rightpanel';
import Grid from '@material-ui/core/Grid';



class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2} xl={2}>
                        <Navbar></Navbar>
                    </Grid>
                    <Grid item xs={6} xl={6}>
                        <SummaryReport></SummaryReport>
                    </Grid>
                    <Grid item xs={4} xl={4}>
                        <RightPanel></RightPanel>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
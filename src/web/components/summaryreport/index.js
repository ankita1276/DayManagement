import React, { Component } from 'react';
import { SummaryStyle, Test } from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinearProgress from '@material-ui/core/LinearProgress';

class SummaryReport extends Component {
    render() {
        return (
            <SummaryStyle>
                <div>
                    <div className="summaryHeader textColor">
                        Keep track of your records
               </div>

                    {/* CALENDER */}
                    <div className="calender textColor">
                        <div className="textColor header">
                            <Card className="cardCalender">
                                <Grid container className="calenderContainer" spacing={5}>
                                    <Grid className="activeB" item xs={1.5}>
                                        <div className="activeC">                                        
                                        <div className="calenderDay">Mon</div>
                                        <div className="calenderDate">12</div>
                                        </div>

                                    </Grid>

                                    <Grid item xs={1.5}>
                                    <div className="activeC"> 
                                        <div className="calenderDay">Tue</div>
                                        <div className="calenderDate active">9</div>
                                    </div>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                    <div className="activeC"> 
                                        <div className="calenderDay">Wed</div>
                                        <div className="calenderDate">22</div>
                                    </div>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                    <div className="activeC"> 
                                        <div className="calenderDay">Thur</div>
                                        <div className="calenderDate">12</div>
                                    </div>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                    <div className="activeC"> 
                                        <div className="calenderDay">Fri</div>
                                        <div className="calenderDate">24</div>
                                    </div>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                    <div className="activeC"> 
                                        <div className="calenderDay">Sat</div>
                                        <div className="calenderDate">12</div>
                                    </div>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                    <div className="activeC"> 
                                        <div className="calenderDay">Sun</div>
                                        <div className="calenderDate">12</div>
                                    </div>
                                    </Grid>

                                </Grid>
                            </Card>
                        </div>
                    </div>

                    {/* WEEKLY REPORTS */}
                    <Grid container >
                        <Grid xs={12} className="cardsTitle">
                            <div className="textColor">Weekly Reports</div>
                            <ul>
                                <li>Today</li>
                                <li>Week</li>
                                <li>Month</li>
                            </ul>
                        </Grid>

                        <Grid xs={4}>
                            <Card className="card">
                                <div className="space-between">
                                    Completed  <i class="material-icons">done</i>
                                </div>
                                <div className="percentDone">10%</div>
                                <LinearProgress variant="determinate" value={10} />

                            </Card>
                        </Grid>
                        <Grid xs={4}>
                            <Card className="card">
                                <div className="space-between">
                                    InProgress  <i class="material-icons">query_builder</i>
                                </div>
                                <div className="percentDone">30%</div>
                                <LinearProgress variant="determinate" value={30} />

                            </Card>
                        </Grid>
                        <Grid xs={4}>
                            <Card className="card">
                                <div className="space-between">
                                    InCompleted  <i class="material-icons">hourglass_empty</i>
                                </div>
                                <div className="percentDone">10%</div>
                                <LinearProgress variant="determinate" value={10} />

                            </Card>
                        </Grid>
                    </Grid>

                    {/* WEEKLY OVERALL TASK DONE ON TIME */}
                    <div className="inAction textColor">
                        In Action
               </div>
                    <Grid container >
                        <Grid xs={6} className="cardsTitle">
                            <Card className="card"></Card>
                        </Grid>
                        <Grid xs={6} className="cardsTitle">
                        </Grid>
                    </Grid>

                </div>

            </SummaryStyle>
        );
    }
}

export default SummaryReport;
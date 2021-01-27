import { Grid } from '@material-ui/core';
import React from 'react';
import { style } from './style.js';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';


function Jobsopenings() {
    return (
        <div style={style.main}>
            <Grid container >
                <Grid item md={12} xs={12}>
                    <Typography style={style.heading} variant="h1">
                        Jobs Openings
                   </Typography>
                    <Grid container style={style.contantMain} spacing={1}>
                        <Grid style={style.box1} item md={2} xs={12}>
                            <select style={style.category}>
                                <option style={style.category2} value="grapefruit">All Jobs Category</option>
                                <option style={style.category2} value="lime">Designer</option>
                                <option style={style.category2} value="coconut">Full Stack Software Enigneer</option>
                                <option style={style.category2} value="mango">Intern</option>
                            </select>
                        </Grid>
                        <Grid style={style.box1} item md={2} xs={12}>
                            <select style={style.category}>
                                <option style={style.category2} value="grapefruit">All Jobs Type</option>
                                <option style={style.category2} value="lime">Full Time</option>
                                <option style={style.category2} value="coconut">Remote Work</option>
                            </select>
                        </Grid>
                        <Grid style={style.box1} item md={2} xs={12}>
                            <select style={style.category}>
                                <option style={style.category2} value="grapefruit">All Jobs Location</option>
                                <option style={style.category2} value="lime">Faislabad</option>
                            </select>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
            <Grid style={style.paperContant} container spacing={5}>
                <Grid item md={4} xs={12}>
                    <Paper style={style.shadow}>
                        <Typography style={style.heading1} variant="h3">
                            Intership
                        </Typography>
                        <a style={style.option2} href="#"><p style={style.option2}><CastForEducationIcon style={style.icon} />Intern</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}><NotificationsIcon style={style.icon} />Full Time, Remote Work</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}>< LocationOnIcon style={style.icon} />Faialabad</p></a>
                        <a style={style.option3} href="#"><p style={style.option3}>More Details < ArrowRightAltIcon style={style.icon2} /></p></a>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Paper style={style.shadow}>
                        <Typography style={style.heading1} variant="h3">
                            Machine Learning (Python) Enigneer
                       </Typography>
                        <a style={style.option2} href="#"><p style={style.option2}><CastForEducationIcon style={style.icon} />Full Stack Software Enigneer</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}><NotificationsIcon style={style.icon} />Remote Work</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}>< LocationOnIcon style={style.icon} />Faialabad</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}>< AttachMoneyIcon style={style.icon} />Expert 25k to 50k</p></a>
                        <a style={style.option4} href="#"><p style={style.option4}>More Details < ArrowRightAltIcon style={style.icon} /></p></a>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Paper style={style.shadow}>
                        <Typography style={style.heading1} variant="h3">
                            Full Stack Software Enigneer
                        </Typography>
                        <a style={style.option2} href="#"><p style={style.option2}><CastForEducationIcon style={style.icon} />Full Stack Software Enigneer</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}>< LocationOnIcon style={style.icon} />Faialabad</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}>< AttachMoneyIcon style={style.icon} />Expert 25k to 50k</p></a>
                        <a style={style.option3} href="#"><p style={style.option3}>More Details < ArrowRightAltIcon style={style.icon2} /></p></a>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Paper style={style.shadow}>
                        <Typography style={style.heading1} variant="h3">
                            Creative Graphic Designer Required
                        </Typography>
                        <a style={style.option2} href="#"><p style={style.option2}><CastForEducationIcon style={style.icon} />Designer</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}><NotificationsIcon style={style.icon} />Full Time</p></a>
                        <a style={style.option2} href="#"><p style={style.option2}>< LocationOnIcon style={style.icon} />Faialabad</p></a>
                        <a style={style.option3} href="#"><p style={style.option3}>More Details < ArrowRightAltIcon style={style.icon2} /></p></a>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}
export default Jobsopenings;
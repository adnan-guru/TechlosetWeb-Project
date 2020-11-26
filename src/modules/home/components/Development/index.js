import React from 'react';
import { style } from './style.js'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function Development() {
    return (
        <div  position="fixed">
        <Grid container style={style.bgimage}>
            <Grid item md={2} xs={12}></Grid>
            <Grid item md={8} xs={12} style={style.alignment}>
                <Typography style={style.heading} variant="h1">
                    Your Trusted Development Partner
               </Typography>
                <Typography style={style.para} variant="p" gutterBottom>
                    We deliver web and mobile app development services to global businesses since 2015, with 100% project delivery success. Hire the best programmers at affordable prices. Our design-focused approach and project execution processes help you to deliver the right solutions.
               </Typography>
                <Button style={style.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<PlayArrowIcon />} >
                    WHAT WE DO
                         </Button>
            </Grid>
            <Grid item md={2} xs={12}></Grid>
        </Grid>
        </div>

    )
}
export default Development;

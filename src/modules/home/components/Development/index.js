import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Buttons from '../../../../commonComponents/buttons'
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Development() {
    const matches = useMediaQuery('(min-width:960px)');

    return (
        <div  position="fixed">
        <Grid container style={style.bgimage}>
            <Grid item md={2} xs={12}></Grid>
            <Grid item md={8} xs={12} style={style.alignment}>
                <Typography style={matches ? style.heading : style.heading2} variant="h1">
                    Your Trusted Development Partner
               </Typography>
                <Typography style={style.para} variant="subtitle1" gutterBottom>
                    We deliver web and mobile app development services to global businesses since 2015, with 100% project delivery success. Hire the best programmers at affordable prices. Our design-focused approach and project execution processes help you to deliver the right solutions.
               </Typography>
               <br />
             <Buttons  title="WHAT WE DO" text="#fff" to="/work" />
             
            </Grid>
            <Grid item md={2} xs={12}></Grid>
        </Grid>
        </div>
    )
}
export default Development;

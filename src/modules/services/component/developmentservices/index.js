import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


function Developmentservices() {
    return (
        <Grid style={style.main} container>
            <Grid item md={2} xs={2}></Grid>
            <Grid item md={8} xs={12}>
                <Typography style={style.heading} variant="h2">
                Web and Mobile Software Development Service
             </Typography>
             <Typography style={style.para} variant="subtitle1">
             A successful offshore software application development company since 1997, providing a full range of website and mobile app development, games development, IoT, AR-VR and other IT services and solutions globally.
             </Typography>
        </Grid>
            <Grid item md={2} xs={2}></Grid>
        </Grid>

    )
}
export default Developmentservices;
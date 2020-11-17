import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


function Blogs() {
    return (
        <Grid style={style.main} container>
            <Grid item md={3} xs={2}></Grid>
            <Grid item md={6} xs={12}>
                <Typography style={style.heading} variant="h2">
                    Blog
             </Typography>
             <Typography style={style.para} variant="subtitle1">
             Our state of the art blog, where you can find tutorials and articles related to latest state of the technology
             </Typography>
        </Grid>
            <Grid item md={3} xs={2}></Grid>
        </Grid>

    )
}
export default Blogs;
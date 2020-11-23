import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



function Ideas() {
    return (

        <Grid container >
            <Grid item md={12} style={style.bgimage}  >
carosel

            </Grid>
            <Grid item md={12} style={style.bgcolor}>
                <Typography style={style.para} variant="subtitle1">
                    DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
               </Typography>
                <Grid item md={12} style={style.alignitem}>
                    <Button style={style.button} variant="contained" color="primary">
                    {<PlayArrowIcon />}
                        CONTACT US
                        
               </Button>
                </Grid>
            </Grid>
        </Grid>



    )
}
export default Ideas;
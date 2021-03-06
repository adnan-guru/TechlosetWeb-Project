import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import divide from '../../../../assets/divide.png';
import Buttons from '../../../../commonComponents/buttons';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



function Articles() {
    return (
        <Grid container >
            <Grid item md={12} xs={12} >
                <Typography style={style.heading} variant="h3">
                    RECENT ARTICLES
         </Typography>
                <Grid item md={12} style={style.align}>
                    <img style={style.img} src={divide} alt="divide" />
                </Grid>
                <Grid item md={12}>
                    <Typography style={style.para} variant="subtitle1">
                        We will share a very helpful blogs in latest state of the art technology.
         </Typography>
                </Grid>
            </Grid>
            <Grid item md={12} style={style.bgImage}  >
            </Grid>
            <Grid item md={12} style={style.bgColor}>
                <Typography style={style.para2} variant="subtitle1">
                    DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
               </Typography>
                <Grid item md={12} style={style.alignItem}>
                    <Buttons title="CONTACT US" color="#fff" to="/contactus" />
                </Grid>
            </Grid>
        </Grid>



    )
}
export default Articles;
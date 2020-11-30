import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Buttons from '../../../../commonComponents/buttons';




function Ideas() {
    return (

        <Grid container >
            <Grid item md={12} style={style.bgimage}  >
              {/* slider */}

            </Grid>
            <Grid item md={12} style={style.bgcolor}>
                <Typography style={style.para} variant="subtitle1">
                    DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
               </Typography>
                <Grid item md={12} style={style.alignitem}>
                    <Buttons title="CONTACT US" color="#fff" to="/contactus" />
                </Grid>
            </Grid>
        </Grid>



    )
}
export default Ideas;
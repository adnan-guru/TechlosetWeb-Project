import React from 'react';
import {style} from './style.js';
import Grid from '@material-ui/core/Grid';
import Buttons from '../../../../commonComponents/buttons';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Contactus(){
    const matches = useMediaQuery('(min-width:960px)');
    return(
    <Grid container>
        <Grid  style={style.main} container>
         <Grid item md={2} xs={2}></Grid>
         <Grid item md={8}  xs={12}>
         <Typography style={matches ? style.para :style.para2}>
          TechloSet transforms small businesses into agile organizations. We do not just develop products, but innovate, as well.
          </Typography>
         <br /> 
          <Buttons title="VIEW OUR WORK" text="#fff"  to="/work" />
         </Grid>
         <Grid item md={2}  xs={2}></Grid>
        </Grid>
        </Grid>
    )
}
export default Contactus;
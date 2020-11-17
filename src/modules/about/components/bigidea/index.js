import React from 'react';
import {style} from './style.js'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Buttons from '../../../../commonComponents/buttons';



export default function Bigidea() {
  

  return (
    
      <Grid container style={style.bgcolor}>
        <Grid item xs md={12} >
<Typography style={style.para} variant="subtitle1">
DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
</Typography>
        </Grid>
        <Grid item md={5} xs={12}></Grid>
        <Grid item md={2} xs={12} style={style.button}>
            <Buttons title="CONTACT US" color="#fff" />
        </Grid>
        <Grid item md={5} xs={12}></Grid>
      </Grid>
   
   
    
  );
}
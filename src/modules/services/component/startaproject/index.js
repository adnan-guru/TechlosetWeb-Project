import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img12 from '../../../../assets/services-img12.jpg';


function Startaproject() {
  return (
    <div style={style.main}>
      <Grid container>
<Grid item md={12} xs={12}>
<img style={style.img2} src={img12} alt="" />
</Grid>
      </Grid>
      <Grid container>
<Grid item md={12} xs={12} tyle={style.top}>
  <a style={style.heading} href="#">
    <Typography style={style.heading} variant="subtitle1">
    LET’S START A PROJECT!
    </Typography>
</a>
</Grid>
      </Grid>
      
    </div>
  );
}
export default Startaproject;
import React from 'react';
import {style} from './style.js';
import Grid from '@material-ui/core/Grid';
import Buttons from '../../../../commonComponents/buttons';


function Contactus(){
    return(
        <Grid  style={style.main} container>
         <Grid item md={2} xs={2}></Grid>
         <Grid item md={8}  xs={12}>
          <h3 style={style.para}>TechloSet transforms small businesses into agile organizations. We do not just develop products, but innovate, as well.</h3>
         <br />
          <Buttons title="CONTACT US"  text="#fff"/>
         </Grid>
         <Grid item md={2}  xs={2}></Grid>
        </Grid>
        
    )
}
export default Contactus;
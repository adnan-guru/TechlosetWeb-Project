import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img11 from '../../../../assets/services-img11.jpg';
import Button from '@material-ui/core/Button';


function Hiredeveloper() {
  return (
    <div style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <img style={style.img} src={img11} alt="" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={style.top}>
          <Typography style={style.heading1} variant="h2">
            Hire Dedicated  Developers
          </Typography>
          <Typography style={style.para} variant="subtitle1">
            Create your own software development team on your time and terms by handpicking the best developers from IndiaNIC. We offer flexible engagement models to hire developers on a short term, long term or permanent basis to ideally suit your business needs. Scale up your development team within 48 hours with ready-to-kick-off experts. We follow a consultative approach to prepare a roadmap that describes the skill set and experience you need based on your project idea.
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                <li style={style.list}>Onsite Hiring</li>
                <li style={style.list}>Fixed Rate Hiring</li>
                <li style={style.list}>Dedicated Hiring</li>
                <li style={style.list}></li>

              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li style={style.list}>Offsite Hiring</li>
                <li style={style.list}>Hourly Hiring</li>
              </ul>
            </Grid>
            <Button style={style.button} variant="contained" color="primary">
              LEARN MORE
      </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Hiredeveloper;

import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img2 from '../../../../assets/services-img2.png';
import Button from '@material-ui/core/Button';


 function Appdevelopment() {
  return (
    <div style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Typography style={style.heading} variant="h2">
            Mobile Apps
          </Typography>
          <Typography style={style.heading} variant="h2">
            Development
          </Typography>
          <Typography style={style.para} variant="h2">
            From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services. IndiaNIC is a top mobile app development company that is renowned for delivering native Android app development, native iOS app development, hybrid and cross-platform app development services to build next-gen mobile applications using the latest technology stack
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                <li style={style.list}>Native iOS App Development</li>
                <li style={style.list}>Cross-platform App Development</li>
                <li style={style.list}>Wearable App Development</li>
                <li style={style.list}>Xamarin App Development</li>
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li style={style.list}>Native Android App Development</li>
                <li style={style.list}>Hybrid App Development</li>
                <li style={style.list}>React Native App Development</li>
                <li style={style.list}>Flutter App Development</li>
              </ul>
            </Grid>
            <Button style={style.button} variant="contained" color="primary">
              LEARN MORE
      </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img style={style.img2} src={img2} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
export default Appdevelopment;
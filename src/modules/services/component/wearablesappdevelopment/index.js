import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img2 from '../../../../assets/services-img8.jpg';
import Button from '@material-ui/core/Button';


function Wearablesappdevelopment() {
  return (
    <div style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item md={11}>
              <Typography style={style.heading} variant="h2">
                Wearables App  Development
          </Typography>
              <Typography style={style.para} variant="subtitle1">
                Smart wearable devices have become a new fashion statement today. You will certainly want to tap on the extremely exclusive market of the apps that run on these smart accessories. Being a leading wearable app development company, we have hands-on experience in delivering robust, innovative, interactive and high performing wearable apps for various wearable devices like Google Glass, Android Wear, Samsung Gear, Fitbit, AR-VR based wearables, etc. Wearables app development experts from IndiaNIC are here to transcend your business idea into small screens for best-in-class digital experiences.
          </Typography>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <ul  >
                    <li style={style.list}>Apple Watch Apps</li>
                    <li style={style.list}>Google Glass Apps</li>
                    <li style={style.list}>Fitness Tracking Apps like Fitbit</li>
                  </ul>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ul>
                    <li style={style.list}>Android Wear Apps</li>
                    <li style={style.list}>Wearable Healthcare Apps</li>
                    <li style={style.list}>Apps for VR headsets</li>
                  </ul>
                </Grid>
                <Button style={style.button} variant="contained" color="primary">
                  LEARN MORE
      </Button>
              </Grid>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item md={12} xs={12}>
            <img style={style.img2} src={img2} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Wearablesappdevelopment;
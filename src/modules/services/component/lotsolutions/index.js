import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img7 from '../../../../assets/services-img7.jpg';
import Button from '@material-ui/core/Button';


function Lotsolutions() {
  return (
    <div style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} style={style.imgtop}>
          <img style={style.img} src={img7} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} style={style.top}>
          <Typography style={style.heading1} variant="h2">
            IoT Solutions
          </Typography>
          <Typography style={style.para} variant="subtitle1">
            Leveraging the power of Internet of Things (IoT), the network of “Connected Devices”, IndiaNIC is the best IoT service provider in developing innovative IoT solutions. Our IoT experts develop bespoke and innovative IoT solutions to simplify and automate complex business processes. Together we can create amazing wireless experiences with the modern IoT hardware to collect information. Hire the best IoT programmers from IndiaNIC who help startups and enterprises to build an IoT platform and connect it with other cloud, onsite applications or multiple IoT platforms.
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                <li style={style.list}>Smart Home Automation</li>
                <li style={style.list}>IoT Application Development</li>
                <li style={style.list}>APIs & Backend</li>
                <li style={style.list}>IoT System Integration</li>
                <li style={style.list}>Implementation and Support</li>
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li style={style.list}>Industrial IoT Automation</li>
                <li style={style.list}>iBeacon Solutions</li>
                <li style={style.list}>IoT Cloud Integration</li>
                <li style={style.list}>IoT Solution Testing</li>
                <li style={style.list}>Industry-grade IoT Consultation</li>
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
export default Lotsolutions;
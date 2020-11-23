import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img3 from '../../../../assets/services-img3.jpg';
import Button from '@material-ui/core/Button';


function Webdevelopment() {
  return (
    <div style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <img style={style.img2} src={img3} alt="" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Typography style={style.heading1} variant="h2" Wrap>
            Web Development
          </Typography>
          <Typography style={style.para} variant="h2">
            Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web presence for your company, an information hub for your business or empowering your apps/IoT devices through backend- IndiaNIC does it all by covering a wide spectrum of web solutions and framework.
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                <li style={style.list}>Custom Website Development</li>
                <li style={style.list}>eCommerce Store Development</li>
                <li style={style.list}>Full-Stack Development</li>
                <li style={style.list}>Progressive Web Apps</li>
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li style={style.list}>Web Application Development</li>
                <li style={style.list}>Custom CRM/ERP Software Apps</li>
                <li style={style.list}>Responsive Web Apps</li>
                <li style={style.list}>Bespoke CMS Development</li>
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
export default Webdevelopment;
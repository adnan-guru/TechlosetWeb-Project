import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img6 from '../../../../assets/services-img6.jpg';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function Virtualappsdevelopment() {
  return (
    <Container style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item md={11}>
              <Typography style={style.heading} variant="h2">
              Virtual Reality Apps   Development
          </Typography>
              <Typography style={style.para} variant="subtitle1">
                VR world is growing fast and IndiaNIC, being a top VR app development company in India & USA, offers realistic experiences for Virtual Reality headsets. Our VR app solutions are a perfect fit for industrial use cases, enterprises, and entertainment. We have proven expertise in delivering VR app development services to build captivating 3D environments and interactive VR apps for diverse industry verticals.
          </Typography>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <ul  >
                    <li style={style.list}>HTV Vive Apps</li>
                    <li style={style.list}>Oculus Rift + Touch</li>
                    <li style={style.list}>VR Cardboard & Oculus Apps</li>
                    <li style={style.list}>VR Instructional Diagrams</li>
                  </ul>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ul>
                    <li style={style.list}>Samsung Gear Apps</li>
                    <li style={style.list}>Microsoft HoloLens Apps</li>
                    <li style={style.list}>Strategic VR Consultation</li>
                    <li style={style.list}>Industry-grade VR Solutions</li>
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
            <img style={style.img2} src={img6} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Virtualappsdevelopment;
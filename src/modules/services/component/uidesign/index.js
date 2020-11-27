import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img4 from '../../../../assets/services-img4.png';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Uidesing() {
  return (
    <Container style={style.main}>
      <Grid container >
            <Grid item md={12} md={6}>
              <Typography style={style.heading} variant="h2">
                UI/UX Design
          </Typography>
              <Typography style={style.para} variant="subtitle1">
                UI/UX design is the catalyst behind the success of any web or mobile app. IndiaNIC is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from IndiaNIC for timely delivery of appealing websites and mobile apps resulting maximum user engagement.
          </Typography>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <ul  >
                    <li style={style.list}>Wireframes Designing</li>
                    <li style={style.list}>High/Low fidelity Prototype</li>
                    <li style={style.list}>Responsive Web Design</li>
                    <li style={style.list}>UX Analysis</li>
                  </ul>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ul>
                    <li style={style.list}>Strategic Design Consulting</li>
                    <li style={style.list}>Mobile App Design</li>
                    <li style={style.list}>Information Architecture</li>
                    <li style={style.list}>UI Design</li>
                  </ul>
                </Grid>
                <Button style={style.button} variant="contained" color="primary">
                  LEARN MORE
      </Button>
              </Grid>
            </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item md={1} xs={12}></Grid>
            <Grid item md={11} xs={12}>
              <img style={style.img2} src={img4} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Uidesing;
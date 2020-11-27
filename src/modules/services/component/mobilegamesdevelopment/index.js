import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img5 from '../../../../assets/services-img5.jpg';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Mobilegamesdevelopment() {
  return (
    <Container style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <img style={style.img} src={img5} alt="" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={style.top}>
          <Typography style={style.heading1} variant="h2" Wrap>
            Mobile Game  Development
          </Typography>
          <Typography style={style.para} variant="subtitle1">
            Creating games is the most energetic part of our business. Our skilled mobile game development team can handle projects from scratch or from any development stage. We’ve been successfully involved in the delivery of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. We turn your idea into an addictive Android or iOS game application while making sure we create out of the box gaming solutions.
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                <li style={style.list}>3D / 2D Games</li>
                <li style={style.list}>Character Design</li>
                <li style={style.list}>3D Modeling</li>
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li style={style.list}>Unity 3D plugins</li>
                <li style={style.list}>Monetization Strategy</li>
                <li style={style.list}>Mobile Games Publishing</li>
              </ul>
            </Grid>
            <Button style={style.button} variant="contained" color="primary">
              LEARN MORE
      </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Mobilegamesdevelopment;
import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Rapeatcomponent(props) {
  return (
    <Container style={style.main}>
      <Grid container>
        {
          props.isLeft ?
          <Grid item xs={12} sm={6}>
              <Grid container>
                <img style={style.img2} src={props.image} alt="" />
              </Grid>
          </Grid>
          :
          null
        }
        <Grid item xs={12} md={6}>
          <Typography style={style.heading1} variant="h2">
            {props.title}
          </Typography>
          <Typography style={style.para} variant="subtitle1">
            {props.paragraph}
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                {
                  props.list.list1.map(item => (
                    <li style={style.list}>{item}</li>
                  ))
                }
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                {
                  props.list.list2.map(item => (
                    <li style={style.list}>{item}</li>
                  ))
                }
              </ul>
            </Grid>
            <Button style={style.button} variant="contained" color="primary">
              LEARN MORE
      </Button>
          </Grid>
        </Grid>
        {
          props.isRight ?
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item md={1} xs={12}></Grid>
              <Grid item md={11} xs={12}>
              <img style={style.img3} src={props.image} alt="" />
              </Grid>
            </Grid>
          </Grid>
          :
          null
          }
      </Grid>
    </Container>
  );
}
export default Rapeatcomponent;
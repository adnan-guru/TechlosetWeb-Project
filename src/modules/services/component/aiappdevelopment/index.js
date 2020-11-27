import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img9 from '../../../../assets/services-img9.jpg';
import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';


function Aiappdevelopment() {
  return (
    <Container style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} style={style.imgtop}>
          <img style={style.img} src={img9} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} style={style.top}>
          <Typography style={style.heading1} variant="h2">
          AI – ML App   Development
          </Typography>
          <Typography style={style.para} variant="subtitle1">
           Looking to add intelligence to your existing business application or want to develop a new one? You are in the right place. Our AI-ML engineers will help you do that. We build AI-ML solutions that will save upto 30% cost on your overall business operations. We have expertise in working with tools, frameworks and technologies like TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch, Neuroph, Mycroft AI, etc. to foster business intelligence to diverse industry verticals.
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul  >
                <li style={style.list}>Product Recommendation Engine</li>
                <li style={style.list}>Image Processing & Recognition</li>
                <li style={style.list}>Virtual Try-on</li>
                <li style={style.list}>Predictive Analysis</li>
                <li style={style.list}>AI-ML Consultation</li>
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li style={style.list}>Chatbots / Conversational AI</li>
                <li style={style.list}>Robotic Process Automation (RPA)</li>
                <li style={style.list}>Behavior Analytics</li>
                <li style={style.list}>Emotion Learning</li>
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
export default Aiappdevelopment;
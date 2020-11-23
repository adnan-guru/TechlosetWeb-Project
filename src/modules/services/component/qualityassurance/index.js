import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import img10 from '../../../../assets/services-img10.jpg';
import Button from '@material-ui/core/Button';


function Wearablesappdevelopment() {
  return (
    <div style={style.main}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item md={11}>
              <Typography style={style.heading} variant="h2">
                Quality Assurance  (QA)
          </Typography>
              <Typography style={style.para} variant="subtitle1">

                We keep Quality Assurance (QA) and software testing services at the core of our ecosystem. IndiaNIC has proven testing experts whose confidence helps in faster releases with uncompromised quality. We perform various tests such as Functional, GUI, Usability, Security, Database testing, Cross-platform, Cross-browser, Accessibility, etc. Our QA experts work with DevOps tools and automated build testing techniques for faster delivery. With us, you will have full access to QA reports to stay updated about test results having all the details.
          </Typography>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <ul  >
                    <li style={style.list}>   QA Documentation</li>
                    <li style={style.list}> Web Testing Automation </li>
                    <li style={style.list}>Mobile Testing Automation  </li>
                    <li style={style.list}>API Testing Automation </li>
                  </ul>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ul>
                    <li style={style.list}>Manual QA Testing</li>
                    <li style={style.list}>Mobile App Testing</li>
                    <li style={style.list}>Performance Testing</li>
                    <li style={style.list}>Expert QA Consultation</li>
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
            <img style={style.img2} src={img10} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Wearablesappdevelopment;
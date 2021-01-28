import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import divide from '../../../../assets/divide.png';
import img13 from '../../../../assets/services-img13.jpg';
import {Container} from '@material-ui/core';


function Wordpressdevelopment() {
    return (
        <Container  style={style.main}>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Typography style={style.heading} variant="h2">
                        WordPress Development
            </Typography>
                    <Typography style={style.para} variant="subtitle1">
                        DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP.
            </Typography>
                    <img style={style.img1} src={divide} alt="divide" />
                    <Typography style={style.para2} variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat.
                    </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <img style={style.img2} src={img13} alt="" />
                </Grid>

            </Grid>
        </Container>
    )
}
export default Wordpressdevelopment;
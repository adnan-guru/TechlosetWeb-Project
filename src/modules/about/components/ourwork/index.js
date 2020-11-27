import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import images from '../../../../constants/images'
import divide from '../../../../assets/divide.png';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Ourwork() {
    return (
       <Container>
        <Grid container style={style.bgcolor}>
            <Grid item md={8}>
                <Typography style={style.heading} variant="h1">
                    OUR WORK
            </Typography>
                <Typography style={style.para}>
                    DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP.
            </Typography>
                <img style={style.img2} src={divide} alt="divide" />
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={2}>
                <Button style={style.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<ArrowRightAltIcon />} >
                    OUR WORK
                         </Button>
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={images.img1} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={images.img2} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={images.img3} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img4} src={images.img4} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={images.img5} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img6} src={images.img6} alt="" />
            </Grid>
        </Grid>
        </Container>

    )
}
export default Ourwork;
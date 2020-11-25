import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import img1 from '../../assets/ourwork1.jpg';
import img2 from '../../assets/ourwork2.jpg';
import img3 from '../../assets/ourwork3.jpg';
import img4 from '../../assets/ourwork4.jpg';
import img5 from '../../assets/ourwork5.jpg';
import divide from '../../assets/divide.png';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';

function Ourwork() {
    return (

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
                <img style={style.img1} src={img1} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img2} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img3} alt="" />
            </Grid>


            <Grid item sm={4}>
                <img style={style.img1} src={img4} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img5} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img1} alt="" />
            </Grid>
        </Grid>

    )
}
export default Ourwork;
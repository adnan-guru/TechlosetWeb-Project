import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import images from '../../../../constants/images'
import divide from '../../../../assets/divide.png';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
function Ourwork() {
    return (
         <Container>
        <Grid container style={style.bgcolor}>
            <Grid item md={12}>
                <Typography style={style.heading} variant="h1">
                    OUR WORK
            </Typography>
                <Typography style={style.para}>
                    Our work speaks for our ability to deliver compelling mobile experiences that your audience will surely love.
            </Typography>
                <img style={style.img2} src={divide} alt="divide" />
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
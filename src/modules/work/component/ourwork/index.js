import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import img1 from '../../../../assets/ourwork1.jpg';
import img2 from '../../../../assets/ourwork2.jpg';
import img3 from '../../../../assets/ourwork3.jpg';
import img4 from '../../../../assets/ourwork4.jpg';
import img5 from '../../../../assets/ourwork5.jpg';
import img6 from '../../../../assets/ourwork6.jpg';
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
                <img style={style.img1} src={img1} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img2} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img3} alt="" />
            </Grid>


            <Grid item sm={4}>
                <img style={style.img4} src={img4} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img1} src={img5} alt="" />
            </Grid>
            <Grid item sm={4}>
                <img style={style.img6} src={img6} alt="" />
            </Grid>


        </Grid>
        </Container>

    )
}
export default Ourwork;
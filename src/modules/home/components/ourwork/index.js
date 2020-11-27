import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import images from '../../../../constants/images';
function Ourwork() {
    return (
        <Grid container style={style.bgcolor}>
            <Grid item sm={12} xs={12}>
            <h1 style={style.heading}>OUR WORK</h1>
            <hr style={style.hr} />
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
    )
}
export default Ourwork;
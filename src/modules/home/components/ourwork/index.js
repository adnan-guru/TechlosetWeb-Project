import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import img1 from '../../../../assets/ourwork1.jpg';
import img2 from '../../../../assets/ourwork2.jpg';
import img3 from '../../../../assets/ourwork3.jpg';
import img4 from '../../../../assets/ourwork4.jpg';
import img5 from '../../../../assets/ourwork5.jpg';


function Ourwork() {
    return (
        <Grid container style={style.bgcolor}>
            <h1 style={style.heading}>OurWork</h1>
            <Grid style={style.grid} style={style.align}>
                <Grid item sm={4}>
                    <img style={style.img1} src={img1} alt="" />
                </Grid>
                <Grid item sm={4}>
                    <img style={style.img1} src={img2} alt="" />
                </Grid>
                <Grid item sm={4}>
                    <img style={style.img1} src={img3} alt="" />
                </Grid>
            </Grid>
            <Grid style={style.align}>
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
        </Grid>
    )
}
export default Ourwork;
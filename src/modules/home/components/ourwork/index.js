import React from 'react';
import { style } from './style.js'
import Grid from '@material-ui/core/Grid';
import img1 from '../../../../assets/ourwork1.jpg';
import img2 from '../../../../assets/ourwork2.jpg';
import img3 from '../../../../assets/ourwork3.jpg';
import img4 from '../../../../assets/ourwork4.jpg';
import img5 from '../../../../assets/ourwork5.jpg';
import img6 from '../../../../assets/ourwork6.jpg';


function Ourwork() {
    return (
        <Grid container style={style.bgcolor}>
            <Grid item sm={12}>
            <h1 style={style.heading}>OUR WORK</h1>
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
    
    )
}
export default Ourwork;
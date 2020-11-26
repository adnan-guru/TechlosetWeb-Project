import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import img from '../../../../assets/divide.png';
import bitimg from '../../../../assets/bitimg.png';
import Typography from '@material-ui/core/Typography';


function Bitabout() {
    return (
        <Grid container style={style.main}>
            <Grid item md={6} xs={12}>
                <Typography style={style.heading} variant="h2">
                    A bit About Us
             </Typography>
                <img style={style.img} src={img} alt="divide" />
                <Typography style={style.para} variant="subtitle1">
                    Techloset is a global web {'&'} mobile app development company located in Pakistan. We are one of the world’s leading mobility firms, where innovative thinking, a bunch of inspiring minds, and a passion blends to forge an extraordinary impact.
             </Typography>
                <Typography style={style.para} variant="subtitle1">
                    We have a team of 50+ dynamic young and enthusiastic professionals who are sincerely dedicated to delivering dreams into exhilarating reality. With specializations in multiple domains, we propel our clients to reach the epitome of optimization. We stand tall not only for infusing profits for our customers in marketing but also draws their trust through our utmost ingenuousness and cordiality.
             </Typography>
                <Typography style={style.para} variant="subtitle1">
                    We affirm to deliver phenomenal customer experiences and deliver them at a radically lower cost.
             </Typography>
            </Grid>
            <Grid item md={6} xs={12} style={style.alignitem}>
                <Grid item md={3}></Grid>
                <Grid item md={9}>
                    <img style={style.img2} src={bitimg} alt="TechloSet" />
                </Grid>
            </Grid>
        </Grid>


    )
}
export default Bitabout;
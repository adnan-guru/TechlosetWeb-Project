import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ComputerIcon from '@material-ui/icons/Computer';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import img1 from '../../../../assets/home1.png';


function Tecnologies() {
    return (

        <Grid container >
            <Grid item md={12}>
                <h2 style={style.heading}>Technologies we work with</h2>
            </Grid>
            <Grid item md={1} xs={1}></Grid>
            <Grid item md={2} xs={12} style={style.col1}>
                <a style={style.service}> <PhoneAndroidIcon style={style.icon} />Mobile</a>
            </Grid>
            <Grid item md={2} xs={12}>
                <a style={style.service} > <TapAndPlayIcon style={style.icon} />Web</a>
            </Grid>
            <Grid item md={2} xs={12}>
                <a style={style.service}><AcUnitIcon style={style.icon} /> Artificial Intelligence</a>
            </Grid>
            <Grid item md={2} xs={12}>
                <a style={style.service}> <ComputerIcon style={style.icon} />DevOp</a>
            </Grid>
            <Grid item md={2} xs={12}>
                <a style={style.service}> <DevicesIcon style={style.icon} />WordPress</a>
            </Grid>
            <Grid item md={1} xs={1}></Grid>
            <Grid container>
                <Grid item md={1} xs={1}></Grid>
                <Grid item md={11} xs={11}>
                    <img style={style.img} src={img1} alt="" />
                </Grid>
            </Grid>


        </Grid>


    )
}
export default Tecnologies;
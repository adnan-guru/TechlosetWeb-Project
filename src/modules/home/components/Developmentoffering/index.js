import { Grid } from '@material-ui/core';
import React from 'react';
import { style } from './style.js';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ComputerIcon from '@material-ui/icons/Computer';
import Typography from '@material-ui/core/Typography';


function Developmentoffering() {
    return (
        <Grid container style={style.bgimage2}>
            <Grid item md={12}>
                <Typography style={style.heading} variant="h2">
                    Key Software Development Offerings
                </Typography>
                <Typography style={style.para} variant="subtitle1">
                    We create the technical heart of your product and make processes simple and understandable.
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} style={style.item} >
                <InstagramIcon style={style.icons} />
                <Typography style={style.heading2} variant="body1">
                    Mobile Development
                </Typography>
                <KeyboardArrowDownIcon style={style.arrow} />
                <Typography style={style.services} variant="body1">
                    React Native
                </Typography>
                <hr style={style.hr} />
                <Typography style={style.services} variant="body1">
                    ISO
                </Typography>
                <hr style={style.hr} />
                <Typography style={style.services} variant="body1">
                    Android
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} style={style.item}>
                <ComputerIcon style={style.icons} />
                <Typography style={style.heading2} variant="body1">
                    Web Development
                </Typography>
                <KeyboardArrowDownIcon style={style.arrow} />
                <Typography style={style.services} variant="body1">
                    React / View /Angular
                </Typography>
                <hr style={style.hr} />
                <Typography style={style.services} variant="body1">
                    Nodejs / Python / Php
                </Typography>
                <hr style={style.hr} />
                <Typography style={style.services} variant="body1">
                    MongoDB / Mysql / PSQL
                </Typography>
            </Grid>
            <Grid item md={4} xs={12} style={style.item}>
                <InstagramIcon style={style.icons} />
                <Typography style={style.heading2}>
                    Artificial Intelligence</Typography>
                <KeyboardArrowDownIcon style={style.arrow} />
                <Typography style={style.services} variant="body1">
                    Deep Learning
                </Typography>
                <hr style={style.hr} />
                <Typography style={style.services} variant="body1">
                    Machine Learning
                </Typography>
                <hr style={style.hr} />
                <Typography style={style.services} variant="body1">
                    Tensorflow
                </Typography>
            </Grid>

            <Grid item md={12} xs={12} style={style.item}>
                <KeyboardArrowDownIcon style={style.arrow4} />
            </Grid>
        </Grid>


    )
}
export default Developmentoffering;
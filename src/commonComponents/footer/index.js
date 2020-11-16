import React from 'react';
import { style } from './style.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Grid } from '@material-ui/core';



function Footer() {
    return (
        <Grid container>
                <Grid item md={4}>
                    <div>
                      <p style={style.copy}>© Copyright 2019 -2020 | TechloSet | ALL RIGHTS RESERVED</p>
                    </div>
                </Grid>
                <Grid item md={5} > </Grid>
                <Grid item md={3} style={style.footericon} >
                    <a style={style.icons} href="#"> <FacebookIcon /></a>
                    <a style={style.icons} href="#"> < LinkedInIcon /></a>
                    <a style={style.icons} href="#"> <TwitterIcon /></a>
                    <a style={style.icons} href="#"> <YouTubeIcon /></a>

                </Grid>
            </Grid>

        

    )
}
export default Footer;
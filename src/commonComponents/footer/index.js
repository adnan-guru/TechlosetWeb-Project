import React from 'react';
import { style } from './style.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Grid } from '@material-ui/core';
import {Typography} from '@material-ui/core';

function Footer() {
    return (
        <Grid container>
                <Grid item md={4}>
                    <div>
                      <Typography variant="subtitle1" style={ style.text}>© Copyright 2019 -2020 | TechloSet | ALL RIGHTS RESERVED</Typography>
                    </div>
                </Grid>
                <Grid item md={5} > </Grid>
                <Grid item md={3} style={style.icontop} >
                    <a style={style.icons} target="blank" href="https://www.facebook.com/techloset/?modal=admin_todo_tour&_rdc=1&_rdr"> <FacebookIcon /></a>
                    <a style={style.icons} target="blank" href="https://www.linkedin.com/company/techloset/about/"> < LinkedInIcon /></a>
                    <a style={style.icons} target="blank" href="https://twitter.com/techloset"> <TwitterIcon /></a>
                    <a style={style.icons} target="blank" href="https://www.youtube.com/channel/UCPC0RXZrvh50scjAzJC-IWg?view_as=subscriber"> <YouTubeIcon /></a>

                </Grid>
            </Grid>

        

    )
}
export default Footer;
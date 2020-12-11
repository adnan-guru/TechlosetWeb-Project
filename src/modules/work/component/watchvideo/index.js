import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import Buttons from '../../../../commonComponents/buttons';
import { Link, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Watchvideo() {
    const matches = useMediaQuery('(min-width:960px)');
    return (
        <Grid style={style.main} container>
            <Grid item md={2} xs={2}></Grid>
            <Grid item md={8} xs={12}>
                <Typography style={matches ? style.para : style.para2} variant="h3">
                    WATCH THE VIDEO FOR OUR CREATIVE PROCESS
             </Typography>
                <br />
                <Link style={style.textdec}  target="_self" href="https://player.vimeo.com/video/106306926?autoplay=1&amp;color=ffffff">
                <Buttons title="watch video" text="#fff" />
              </Link>
            </Grid>
            <Grid item md={2} xs={2}></Grid>
        </Grid>

    )
}
export default Watchvideo;
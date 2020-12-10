import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Contactus() {
    return (

            <Grid container style={style.footer}>
                {/* <Grid item md={2} x={12}></Grid> */}
                <Grid item md={4} xs={12}>
                    < PhoneEnabledIcon style={style.icons} />
                    <Typography style={style.iconcontect} variant="h2">
                        +92-306-0008208
               </Typography>

                </Grid>
                <Grid item md={4} xs={12}>
                    < TwitterIcon style={style.icons} />
                    <Typography style={style.iconcontect} variant="h2">
                        Tweet Us
               </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                    < MailOutlineIcon style={style.icons} />
                    <Typography style={style.iconcontect} variant="h2">
                        Email Us
               </Typography>
                </Grid>
                {/* <Grid item md={1} xs={12}></Grid> */}
            </Grid>

        

    )
}
export default Contactus;
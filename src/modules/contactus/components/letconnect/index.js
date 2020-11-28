import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import TwitterIcon from '@material-ui/icons/Twitter';
import SendIcon from '@material-ui/icons/Send';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Contactus() {
    return (

        <Grid container >
            <Grid item md={2} xs={2}></Grid>
            <Grid item md={8} xs={8}>
                <Typography style={style.heading} variant='subtitle1'>
                    Let’s Connect, We are more than happy to help you.
          </Typography>
            </Grid>
            <Grid item md={2} xs={2}></Grid>
            <Grid container style={style.main}>
                <Grid item md={1} xs={1}></Grid>
                <Grid item md={5} xs={12}>
                    slider
                </Grid>
                <Grid item md={5} xs={12}>
                    <input style={style.inputs1} type="text" placeholder="NAME" />
                    <input style={style.inputs2} type="text" placeholder="EMAIL" />
                    <input style={style.inputs2} type="text" placeholder="PHONE" />
                    <Grid container>
                        <Grid item md={6} xs={6}>
                            <select style={style.menu1}>
                                <option value="Select a Service">Select a Service</option>
                                <option value="Mobile Application Development">Mobile Application Development</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="WordPress">WordPress</option>
                                <option value="Consulting-Cloud and DevOps">Consulting-Cloud and DevOps</option>
                                <option value="QA Service">QA Service</option><option value="Other">Other</option>
                            </select>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <select style={style.menu2} >
                                <option value="Select Budget">Select Budget</option>
                                <option value="<$5K">&lt;$5K</option><option value="<$10K+">&lt;$10K+</option>
                                <option value="<$25K+">&lt;$25K+</option><option value="<$50K+">&lt;$50K+</option>
                                <option value="<$100K+">&lt;$100K+</option><option value="Not Sure">Not Sure</option>
                            </select>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <select style={style.menu1} >
                                <option value="How Soon You Want To Start?">How Soon You Want To Start?</option>
                                <option value="Right Now">Right Now</option>
                                <option value="In few Weeks">In few Weeks</option>
                                <option value="In few Months">In few Months</option>
                                <option value="Not Sure">Not Sure</option>
                            </select>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <select style={style.menu2}>
                                <option value="Requirement">Requirement</option>
                                <option value="Hire Dedicated Team">Hire Dedicated Team</option>
                                <option value="New Project">New Project</option>
                                <option value="Existing Project">Existing Project</option>
                                <option value="Support-Maintenance">Support-Maintenance</option>
                            </select>
                        </Grid>
                        <Grid col md={12} xs={12}>
                        <textarea style={style.option}  cols="40" rows="10"  placeholder="Brief About The Project" />
                        </Grid>
                        <Grid col md={12} xs={12}>
                        </Grid>
                        <input  style={style.contact} type="submit" value="LET'S TALK" />
                       </Grid>
                </Grid>
                <Grid item md={1} xs={1}></Grid>
            </Grid>
            <Grid container style={style.footer}>
                <Grid item md={1} x={12}></Grid>
           <Grid item md={3} x={12}>
               < PhoneEnabledIcon style={style.icons}  />
               <Typography style={style.iconcontect} variant="h2">
               +92-306-0008208
               </Typography>

           </Grid>
           <Grid item md={3} xs={12}>
           < TwitterIcon  style={style.icons}  />
               <Typography style={style.iconcontect} variant="h2">
               Tweet Us
               </Typography>
           </Grid>
           <Grid item md={3} xs={12}>
           < MailOutlineIcon style={style.icons}  />
               <Typography style={style.iconcontect} variant="h2">
               Email Us
               </Typography>
           </Grid>
           <Grid item md={1} xs={12}></Grid>
            </Grid>
            
        </Grid>

    )
}
export default Contactus;
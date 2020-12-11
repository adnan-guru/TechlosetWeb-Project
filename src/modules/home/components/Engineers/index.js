import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from 'react-router-dom';


function Engineers(props) {
    const history = useHistory();
    const goToPage = ()=>{
        history.push(props.to)
    }
    return (
        <Grid container style={style.top}>
            <Grid item md={12}>
                <Typography style={style.heading} variant="h1">
                    Hire the Best Software Engineers
            </Typography>
            </Grid>

            <Grid item md={8} xs={12}>
                <Typography style={style.para} variant="subtitle1">
                    TechloSet is a top mobile agency and software development company with a large pool of software developers available for dedicated and fixed time/cost projects. Hire web developers from Techloset Solutions who have proven expertise in trending web technologies like ReactNative, Redux, React, ApoloClient, material-ui and back-end technologies like Node.js, python, flask, django, magento, wordpress to develop custom and responsive websites, web apps and eCommerce solutions.
                </Typography>
                <Typography style={style.para} variant="subtitle2" >
                    Our Android app, iOS app and cross-platform mobile app developers are adroit in the latest mobile technologies and tools like Android Studio, Xcode, React Native, etc. to build next-gen mobile application
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
                <Link to="/work" style={style.textdec}>
                    <Button onClick={goToPage}  style={style.button}
                        variant="contained"
                        color="secondary"
                        startIcon={<ArrowRightAltIcon />} >
                        HIRE NOW
                         </Button>
                </Link>
            </Grid>
            
       
        </Grid>

    )
}

export default Engineers;
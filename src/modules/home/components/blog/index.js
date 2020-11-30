import { Grid } from '@material-ui/core';
import React from 'react';
import { style } from './style.js';
import divide from '../../../../assets/divide.png';
import Button from '@material-ui/core/Button';
import logo from '../../../../assets/logo.png';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from 'react-router-dom';


function Blog(props) {
    const history = useHistory();
    const goToPage = ()=>{
        history.push(props.to)
    }
    return (
        
        <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={8}>
                <Typography style={style.heading} variant="h2">
                  Blog
                </Typography>
               <Typography style={style.para} variant="subtitle1">
               Our state of the art blog, where you can find tutorials and articles related to latest state of the technology
               </Typography>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item md={12} xs={12} style={style.alignment2}>
                <img style={style.img} src={divide} alt="" />
             <a href="#"  style={style.textdec}>
                <Button style={style.button}
                    variant="contained"
                    color="secondary">
                    ALL ARTICLES
                         </Button>
                      </a>  
            </Grid>
            <Grid item md={12} xs={12} style={style.alignment1}>
                <img style={style.img2} src={logo} alt="" />
                <Typography  style={style.para2}>
                DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
                </Typography>
                <Link to="/contactus" style={style.textdec}>
                <Button onClick={goToPage} style={style.button2}
                    variant="contained"
                    color="secondary"
                    startIcon={<PlayArrowIcon />} >
                    Contact Us
                         </Button>
                         </Link>
            </Grid>
            </Grid>
     
     
    )
}
export default Blog;

import React from 'react';
import {style} from './style.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';



export default function Navbar() {

  return (
    
      <AppBar style={style.root} position="fixed">
        <Toolbar>
          <img style={style.imglogo} src={logo} alt="logo" />
          <Typography variant="h6" style={style.title}>
            
          </Typography>
          <Link to="/" style={style.toplink} >HOME</Link>
          <Link to="/about" style={style.toplink} >ABOUT</Link>
          <Link to="/work" style={style.toplink} >WORK</Link>
          <Link to="/blog" style={style.toplink} >BLOG</Link>
          <Link to="/services" style={style.toplink} >SERVICES</Link>
          <Link style={style.toplink} >JOBS</Link>
          <Button style={style.button} variant="contained" color="primary">
        CONTACT US
      </Button>
        </Toolbar>
      </AppBar>
    
  );
}
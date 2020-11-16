
import React from 'react';
import {style} from './style.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import logo from '../../assets/logo.png';
import Buttons from '../../commonComponents/buttons';



export default function Navbar() {

  return (
    
      <AppBar style={style.root} position="fixed">
        <Toolbar>
          <img style={style.imglogo} src={logo} alt="logo" />
          <Typography variant="h6" style={style.title}>
            
          </Typography>
          <Link style={style.toplink} >HOME</Link>
          <Link style={style.toplink} >ABOUT</Link>
          <Link style={style.toplink} >WORK</Link>
          <Link style={style.toplink} >BLOG</Link>
          <Link style={style.toplink} >SERVICES</Link>
          <Link style={style.toplink} >JOBS</Link>
          <Buttons />
        </Toolbar>
      </AppBar>
    
  );
}
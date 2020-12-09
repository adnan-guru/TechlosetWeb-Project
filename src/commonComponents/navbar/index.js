import React, { useEffect, useState } from 'react';
import { style } from './style.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '../../commonComponents/drawer'

export default function Navbar() {
  const [navBackground, setnavBackground] = useState("transparent")
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 70 ? "transparent" : "rgb(50,54,67)";
      setnavBackground(backgroundcolor);
    });
  }, [])

  return (
    <AppBar style={{ ...style.main, backgroundColor: navBackground, }} position="fixed">
      <Toolbar>
        <img style={style.imglogo} src={logo} alt="logo" />
        <Hidden only="xs">
          <Typography variant="h6" style={style.title}>
          </Typography>
          <Link to="/" style={style.toplink} >HOME</Link>
          <Link to="/about" style={style.toplink} >ABOUT</Link>
          <Link to="/work" style={style.toplink} >WORK</Link>
          <Link to="/blog" style={style.toplink} >BLOG</Link>
          <Link to="/services" style={style.toplink} >SERVICES</Link>
          <Link to="/jobs" style={style.toplink} >JOBS</Link>
          <Link to="/contactus" style={style.contact}>
            CONTACT US
         </Link>
        </Hidden>
        <Hidden only={['sm', 'md', 'lg']}>
          <Drawer />
        </Hidden>
      </Toolbar>
    </AppBar>

  );
}

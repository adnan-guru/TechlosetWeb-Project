import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { style } from './style.js';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
    list: {
        width: 200,
        height: 600,
        backgroundColor: 'rgb(50,54,67)',
        padding: '20px',
        opacity:'0.9',
        
    },
    fullList: {
        // width: 250,
    },
});

const type = 'top' | 'left' | 'bottom' | 'right';

export default function Drawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (
        event
    ) => {

        setState({ ...state, left: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            
                <ListItem button key={"home"}>
                    <Link to="/" style={style.toplink} >HOME</Link>
                </ListItem>
                <ListItem button key={"About"}>
                    <Link to="/about" style={style.toplink} >ABOUT</Link>
                </ListItem>
                <ListItem button key={"work"}>
                    <Link to="/work" style={style.toplink} >WORK</Link>
                </ListItem>
                <ListItem button key={"blog"}>
                    <Link to="/blog" style={style.toplink} >BLOG</Link>
                </ListItem>
                <ListItem button key={"servics"}>
                    <Link to="/services" style={style.toplink} >SERVICES</Link>
                </ListItem>
                <ListItem button key={"About"}>
                    <Link to="/jobs" style={style.toplink} >JOBS</Link>
                </ListItem>
                <ListItem>
                <Link to="/contactus" style={style.toplink} >CONTACT US</Link>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
    const matches = useMediaQuery('(min-width:960px)');
    return (
        <div style={{marginLeft:"auto"}}>
            <ReorderSharpIcon  onClick={toggleDrawer("left", true)} />

            <React.Fragment key={"left"}>
                <SwipeableDrawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
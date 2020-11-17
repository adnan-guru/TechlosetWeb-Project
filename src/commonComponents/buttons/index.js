
import React from 'react';
import { style } from './style.js';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Buttons(props) {
    return (

        <div>
           
           <Button style={{...style.button, backgroundColor: props.color ? props.color : "rgb(33, 118, 255)",color: props.text ? props.text : "black" }}   variant="contained">
                             
                            {< PlayArrowIcon />} 
                            {props.title}
                         </Button>
        </div>

    )
}
export default Buttons;
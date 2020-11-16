
import React from 'react';
import { style } from './style.js';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Buttons(props) {
    return (

        <div>
           
           <Button style={style.button }
                            variant="contained"
                            color="secondary"
                            startIcon={<PlayArrowIcon />} >
                            Contact Us
                         </Button>
        </div>

    )
}
export default Buttons;
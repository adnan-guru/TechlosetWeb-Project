
import React from 'react';
import { style } from './style.js';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useHistory } from 'react-router-dom';

function Buttons(props) {
    const history = useHistory();
    const goToPage = () => {
        history.push(props.to)
    }
    return (

        <div>
            <Button onClick={goToPage} style={{ ...style.button, backgroundColor: props.color ? props.color : "rgb(33, 118, 255)", color: props.text ? props.text : "black", }} variant="contained">
                <PlayArrowIcon />
                {props.title ? props.title : "Contact Us"}
            </Button>
        </div>

    )
}
export default Buttons;
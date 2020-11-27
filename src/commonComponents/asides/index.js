import React from 'react';
import { style } from './style.js';
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
function Asides() {
  return (
    <div>
      <Fab style={style.aside} size="medium" color="primary">
        <a style={style.icon} href="#"> <ExpandLessIcon /></a>
      </Fab>
    </div>
  )
}
export default Asides;
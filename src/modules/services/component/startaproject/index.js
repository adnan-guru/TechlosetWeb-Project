import React from 'react';
import { style } from './style.js';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from 'react-router-dom';
import img12 from '../../../../assets/services-img12.jpg';


function Startaproject(props) {
  const history = useHistory();
  const goToPage = ()=>{
      history.push(props.to)
  }
  return (
    <div style={style.main}>
      <Grid container>
<Grid item md={12} xs={12}>
<img style={style.img2} src={img12} alt="" />
</Grid>
      </Grid>
      <Grid container>
<Grid item md={12} xs={12} tyle={style.top}>
  <Link onClick={goToPage} style={style.heading} to="/contactus">
    <Typography style={style.heading} variant="subtitle1">
    LET’S START A PROJECT!
    </Typography>
</Link>
</Grid>
      </Grid>
      
    </div>
  );
}
export default Startaproject;
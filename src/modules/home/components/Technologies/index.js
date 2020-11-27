import React from 'react';
import { style } from './style.js'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ComputerIcon from '@material-ui/icons/Computer';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import img1 from '../../../../assets/home1.png';
import img2 from '../../../../assets/home2.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newVal) => {
    setValue(newVal);
  };
  return (
    <div >
      <Grid container >
        <Grid item md={12}>
          <h2 style={style.heading}>Technologies we work with</h2>
        </Grid>
      </Grid>

      <div style={style.main}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab style={style.heading2} label="Mobie" icon={<PhoneAndroidIcon />} {...a11yProps(0)} />
          <Tab style={style.heading2} label="Web" icon={<PhoneAndroidIcon />} {...a11yProps(1)} />
          <Tab style={style.heading2} label="Artificial Integence" icon={<AcUnitIcon />} {...a11yProps(2)} />
          <Tab style={style.heading2} label="DevOps" icon={<ComputerIcon />} {...a11yProps(3)} />
          <Tab style={style.heading2} label="WordPress" icon={< ShoppingBasket />} {...a11yProps(4)} />

        </Tabs>
      </div>
      <Grid container>
        <Grid item md={1} xs={1}></Grid>
        <Grid item md={10} xs={10}>
          <TabPanel value={value} index={0}>
            <img style={style.img1} src={img1} alt="" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <img style={style.img1} src={img2} alt="" />
          </TabPanel>
          <TabPanel value={value} index={2}>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography style={style.text} variant="subtitle1">
              Your Content Goes Here
        </Typography>

          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography style={style.text} variant="subtitle1">
              Your Content Goes Here
        </Typography>
          </TabPanel>
        </Grid>
        <Grid item md={1} xs={1}></Grid>
      </Grid>

    </div>
  );
}
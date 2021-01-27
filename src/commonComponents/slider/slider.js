import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Grid } from '@material-ui/core';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import { useStyles } from './style';
// import "./slider.scss"

function Project(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.iconGrid}>
        <PersonSharpIcon className={classes.icon} fontSize={'large'} />
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            component="h5"
            paragraph
            style={{
              backgroundColor: '#f6f6f6',
              color: '#747474',
              fontSize: '18px',
              textAlign: 'center',
              letterSpacing: '2px',
              fontStyle: 'Roboto',
            }}
          >
            <p>{props.item.description}</p>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h6"
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            color: '#747474',
            fontSize: '18px',
            textAlign: 'center',
            letterSpacing: '2px',
            fontStyle: 'Roboto',
          }}
        >
          <b> {props.item.name}</b> {props.item.last}
        </Typography>
      </Grid>
    </Grid>
  );
}

const items = [
  {
    name: 'THEREDCROSS, ',
    last: 'Client at Fiverr',
    description:
      'Team Techloset is very professional. They continue to improve our application as requested. Communication with this team is very good. They are responsive, complete all revision according to detailed description, and deliver results quickly.',
    color: '#64ACC8',
  },
  {
    name: 'TESHAGER BIABLE, ',
    last: 'Client at Upwork',
    description:
      'Extremely top notch developers, with very high-quality development skills. Stick to deadlines as promised, and respond quickly to messages. I will definitely hire Techloset again.',
    color: '#64ACC8',
  },
  {
    name: 'NE_ZYGIS, ',
    last: 'Client at Fiverr',
    description: 'Good quality and very quick with delivering.',
    color: '#CE7E78',
  },
  {
    name: 'HIPHELOHUWAH, ',
    last: 'Client at Fiverr',
    description: 'Outstanding experience!',
    color: '#C9A27E',
  },
  {
    name: 'BERTBECK, ',
    last: 'Client at Fiverr',
    description: 'Very easy to work with Techloset.',
    color: '#7D85B1',
  },
  {
    name: 'GANESH TANGELLA, ',
    last: 'CEO Aspect Solutions',
    description:
      'Very skilled in ReactJS, MEAN and MERN stacks. Excellent React Native mobile developers and delivered excellent work in our development project and I enjoyed working with them. Communication was top-notch, they met all deadline.',
    color: '#C9A27E',
  },

  {
    name: 'MEL, ',
    last: 'Client at Upwork',
    description:
      'It has been a great opportunity to work with Techloset. They have been helpful in providing more ideas for the project whilst delivering very effectively. Their key skills are experience, deadline oriented and Smart Work.',
    color: '#C9A27E',
  },
];

const Slider = () => {
  return (
    <div style={{ marginTop: '20px', color: '#494949' }}>
      <Carousel
        className="SecondExample"
        autoPlay={true}
        animation={'slide'}
        indicators={true}
        timeout={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={true}
      >
        {items.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
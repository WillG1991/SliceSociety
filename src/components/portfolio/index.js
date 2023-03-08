import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import portOne from "../../assets/images/portfolio/fullsize/1.jpeg"
import portTwo from "../../assets/images/portfolio/fullsize/2.jpeg"
import portThree from "../../assets/images/portfolio/fullsize/3.jpeg"
import portFour from "../../assets/images/portfolio/fullsize/4.jpeg"
import portFive from "../../assets/images/portfolio/fullsize/5.jpeg"
import portSix from "../../assets/images/portfolio/fullsize/6.jpeg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
    width: '600px', // add fixed width
    height: '500px', // add fixed height
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="portfolio">
      <Grid container spacing={0}>
        <Grid item lg={4} sm={6}>
          <Paper className={classes.paper}>
            <a className="portfolio-box skewImg" href="assets/img/portfolio/fullsize/1.jpeg" title="Owners Pat and Nicole.">
              <img className={classes.imgFluid} src={portOne} alt="Owners Pat and Nicole." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50"></div>
                <div className="project-name">Owners Pat and Nicole.</div>
              </div>
            </a>
          </Paper>
        </Grid>
        <Grid item lg={4} sm={6}>
          <Paper className={classes.paper}>
            <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpeg" title="Locally sourced honey.">
              <img className={classes.imgFluid} src={portTwo} alt="Locally sourced honey." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50"></div>
                <div className="project-name">Locally sourced honey.</div>
              </div>
            </a>
          </Paper>
        </Grid>
        <Grid item lg={4} sm={6}>
          <Paper className={classes.paper}>
            <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpeg" title="Cozy homelike atmosphere.">
              <img className={classes.imgFluid} src={portThree} alt="Cozy homelike atmosphere." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50"></div>
                <div className="project-name">Cozy homelike atmosphere.</div>
              </div>
            </a>
          </Paper>
        </Grid>
        <Grid item lg={4} sm={6}>
          <Paper className={classes.paper}>
            <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpeg" title="Elvis bread baked in house.">
              <img className={classes.imgFluid} src={portFour} alt="Elvis bread baked in house." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50"></div>
                <div className="project-name">Elvis bread baked in house.</div>
              </div>
            </a>
          </Paper>
        </Grid>
        <Grid item lg={4} sm={6}>
        <Paper className={classes.paper}>
            <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpeg" title="Fresh baked cookies.">
              <img className={classes.imgFluid} src={portFive} alt="Fresh baked cookies." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50"></div>
                <div className="project-name">Fresh baked cookies.</div>
              </div>
            </a>
          </Paper>
        </Grid>
        <Grid item lg={4} sm={6}>
          <Paper className={classes.paper}>
            <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpeg" title="Elvis bread baked in house.">
              <img className={classes.imgFluid} src={portSix} alt="Elvis bread baked in house." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50"></div>
                <div className="project-name">Elvis bread baked in house.</div>
              </div>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


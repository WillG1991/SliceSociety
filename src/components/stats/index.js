import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import statsBackImage from "../../assets/images/statsBack.png";
import { useInView } from "react-intersection-observer";
import Slide from 'react-reveal/Slide';


const useStyles = makeStyles((theme) => ({
  statsItem: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "6rem",
    "& span": {
      fontSize: "3rem",
      color: "#fff",
      fontWeight: "bold",
    },
    "& p": {
      fontSize: "1.5rem",
      color: "#888",
      marginTop: "1rem",
      fontWeight: "bold",
    },
  },
  statsCounter: {
    backgroundImage: `url(${statsBackImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& *": {
      textAlign: "center",
    },
  },
}));

function StatsCounter() {
  const classes = useStyles();
  const [countUpStarted, setCountUpStarted] = useState(false);
  const { ref, inView } = useInView({ threshold: 2 });

  const handleCountUp = () => {
    if (inView) {
      setCountUpStarted(true);
    }
  };

  return (
    <section
      id="stats-counter"
      className={`stats-counter ${classes.statsCounter}`}
      data-aos="zoom-out"
    >
       <div className="container" data-aos="zoom-out">
        <Grid container justify="space-between" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.statsItem}>
            <CountUp end={47} duration={3} start={countUpStarted ? null : 0} onEnd={() => setCountUpStarted(true)} />
              <Typography variant="h6" component="p">
                Events
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.statsItem}>
            <CountUp end={17} duration={3} start={countUpStarted ? null : 0} onEnd={() => setCountUpStarted(true)} />
              <Typography variant="h6" component="p">
                Locations
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.statsItem}>
            <CountUp end={20} duration={3} start={countUpStarted ? null : 0} onEnd={() => setCountUpStarted(true)} />
              <Typography variant="h6" component="p">
                Pizzas
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.statsItem}>
            <CountUp end={19} duration={3} start={countUpStarted ? null : 0} onEnd={() => setCountUpStarted(true)} />
              <Typography variant="h6" component="p">
                Workers
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default StatsCounter;

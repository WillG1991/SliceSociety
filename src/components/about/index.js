import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import AboutOne from "../../assets/images/about/aboutOne.png"
import AboutTwo from "../../assets/images/about/aboutTwo.png"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slide from 'react-reveal/Slide';


const useStyles = makeStyles((theme) => ({
  about: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  aboutImg: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  callUs: {
    position: 'absolute',
    bottom: '10%',
    left: '25%',
    backgroundColor: 'white',
    color: 'black',
    width: "50%",
    padding: theme.spacing(2),
  },
  content: {
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
    },
  },
  imgFluid: {
    maxWidth: '100%', /* add this line to make the image smaller */
  },

}));

function About() {
  const classes = useStyles();

  return (
    <Grid>
    <Slide bottom timeout={2500}>
    <Container>
    <section id="about" className={classes.about}>
      <div className="container" data-aos="fade-up">
      <div className="section-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  <Typography variant="body1" style={{ color: "grey" }}>About Us</Typography>
  <Typography variant="h3" style={{ fontFamily: "CustomFont", fontSize: "4rem"}}>
    Welcome to Slice Society -  <span style={{ color: '#1A73E9'}}>Where Every Slice Tells a Story!</span>
  </Typography>
</div>
        <Grid container spacing={4}>
          <Grid item lg={7} sm={12}>
            <div
              className={`position-relative about-img ${classes.aboutImg}`}
              style={{ backgroundImage: `url(${AboutOne})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
        
            </div>
          </Grid>

          <Grid item lg={5}>
          <div
  className={`content ps-0 ps-lg-5 ${classes.content}`}
  data-aos="fade-up"
  data-aos-delay="300"
  style={{ textAlign: "left" }}
>
  <Typography variant="body1" fontStyle="italic">
  Slice Society is a pizza restaurant that's all about community and great pizza. We're a place where friends and family can come together over a delicious pie and enjoy each other's company. Our restaurant is designed to be warm and welcoming, with an open kitchen so you can see our chefs at work.  </Typography>
  <ul style={{ listStyle: "none", paddingLeft: "0" }}>
    <li>
      <Typography variant="body1">
      <CheckCircleIcon color="inherit" style={{ marginRight: "8px", color: '#1A73E9' }} />
      Locally sourced ingredients and fresh dough made in-house daily      </Typography>
    </li>
    <li>
      <Typography variant="body1">
      <CheckCircleIcon color="inherit" style={{ marginRight: "8px", color: '#1A73E9'  }} />
      Open kitchen design for a welcoming atmosphere
      </Typography>
    </li>
    <li>
      <Typography variant="body1">
      <CheckCircleIcon color="inherit" style={{ marginRight: "8px", color: '#1A73E9' }} />
      Community-focused events and gatherings to bring people together
      </Typography>
    </li>
  </ul>
  <Typography variant="body1">
  At Slice Society, we're not just a pizza place – we're a community hub. We host events, game nights, and other gatherings to bring people together. We believe that food has the power to unite people and create lasting memories, and we're proud to be a part of our local community.
  </Typography>
              <div className={`position-relative mt-4 ${classes.positionRelative}`}>
                <img src={AboutTwo} className={`img-fluid ${classes.imgFluid}`} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  </Container>
  </Slide>
  </Grid>
);
}


export default About;
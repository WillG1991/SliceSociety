import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles((theme) => ({
  contact: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  sectionHeader: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  heading: {
    marginBottom: theme.spacing(2),
    color: "grey"
  },
  subheading: {
    color: "black",
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    justifyContent: 'flex-start', // Add this line to align items left
    backgroundColor: '#F4F4F4',
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '2rem',
    color: '#fff',
    borderRadius: '50%',
    padding: theme.spacing(1),
    backgroundColor: '#1A73E9',
    border: '2px solid #1A73E9',
  },
  mapContainer: {
    height: '500px',
    width: '100%',
    border: 'none',
  },
}));

const Contact = () => {
  const classes = useStyles();


  return (
    <section id="contact" className={classes.contact}>
              <Fade bottom timeout={2000}>

      <Container maxWidth="lg">
        <div className={classes.sectionHeader}>
          <Typography variant="body1" className={classes.heading}>
            Contact
          </Typography>
          <Typography variant="h2" className={classes.subheading}>
            Need Help? <span style={{ color: "#1A73E9" }}>Contact Us</span>
          </Typography>
        </div>
        <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109153.15938625907!2d-116.22721572801466!3d33.8173532220906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca4f1d018d25f%3A0x8b355c0647f86af4!2sJoshua%20Tree%20National%20Park%2C%20California%2C%20USA!5e0!3m2!1sen!2suk!4v1646814726179!5m2!1sen!2suk
      " 
      width="600" 
      height="450" 
      className={classes.mapContainer}
      style={{ border: 0 }} 
      allowFullScreen=""
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
<br></br>
<br></br>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className={classes.infoItem}>
              <RoomIcon className={classes.icon} />
              <div>
                <Typography variant="h4" className={classes.heading}>
                  Our Address
                </Typography>
                <Typography variant="body1" className={classes.subheading}>
                  Sometown, NJ 08846
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.infoItem}>
              <EmailIcon className={classes.icon} />
              <div>
                <Typography variant="h4" className={classes.heading}>
                  Email Us
                </Typography>
                <Typography variant="body1" className={classes.subheading}>
                  contact@example.com
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.infoItem}>
              <PhoneIcon className={classes.icon} />
              <div>
                <Typography variant="h4" className={classes.heading}>
                  Call Us
                </Typography>
                <Typography variant="body1" className={classes.subheading}>
                  +1 555-555-5555
                  </Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className={classes.infoItem}>
          <AccessTimeIcon className={classes.icon} />
          <div>
            <Typography variant="h4" className={classes.heading}>
              Opening Hours
            </Typography>
            <Typography variant="body1" className={classes.subheading}>
            Mon-Sat: 11AM - 23PM;
             
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  </Container>
  </Fade>
</section>
);
};



export default Contact;








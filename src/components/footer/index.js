import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Room, Phone, AccessTime, Twitter, Facebook, Instagram, LinkedIn, Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    padding: '60px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  footerLinks: {
    display: 'flex',
  },
  followUs: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'center',
    '& a': {
      color: '#fff',
      fontSize: '24px',
      marginRight: '15px',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  },
  btn: {
    color: 'white',
    borderColor: 'white',
  },
  footerCol: {
    textAlign: 'center',
  },
}));

function Footer() {
  const classes = useStyles();


  return (
    <footer id="footer" className={classes.footer}>
            <Container maxWidth="md" className={classes.container}>
        <Typography variant="h2" component="h2" className={classes.title}>
          Order Now!
        </Typography>
        <Button
        className={classes.btn}
  variant="outlined"
  color="default"
  size="large"
  style={{ display: 'block', margin: 'auto' }}
>
  Order Now!
</Button>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={3} md={6} xs={12} className={classes.footerCol}>
            <Room className={classes.icon} />
            <div>
              <Typography variant="h4">Address</Typography>
              <Typography variant="body1">
                Some Street <br />
                SomeTown, NJ 08846 - US
              </Typography>
            </div>
          </Grid>

          <Grid item lg={3} md={6} xs={12} className={classes.footerCol}>
            <Phone className={classes.icon} />
            <div>
              <Typography variant="h4">Reservations</Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> 555-555-5555<br />
                <strong>Email:</strong> info@example.com
              </Typography>
            </div>
          </Grid>

          <Grid item lg={3} md={6} xs={12} className={classes.footerCol}>
            <AccessTime className={classes.icon} />
            <div>
              <Typography variant="h4">Opening Hours</Typography>
              <Typography variant="body1">
                <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                Sunday: Closed
              </Typography>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12} className={classes.footerCol}>
          <Person className={classes.icon} />
            <Typography variant="h4">Follow Us</Typography>
            <div className={classes.socialLinks} style={{ textAlign: 'center' }}>
              <a href="#" className={classes.iconLink}>
                <Twitter />
              </a>
              <a href="#" className={classes.iconLink}>
                <Facebook />
              </a>
              <a href="#" className={classes.iconLink}>
                <Instagram />
              </a>
              <a href="#" className={classes.iconLink}>
                <LinkedIn />
              </a>
            </div>
          </Grid>
        </Grid>
        <br></br>
        <div className={classes.footerBottom} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Typography variant="body1">
    &copy; {new Date().getFullYear()} Slice Society. All Rights Reserved
  </Typography>
</div>
      </Container>
    </footer>
  );
}

export default Footer;
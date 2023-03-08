import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Assignment, Star, Inbox } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
  sectionBg: {
    backgroundColor: '#f7f7f7',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whyBox: {
    padding: theme.spacing(4),
    backgroundColor: '#1A73E9',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    height: '60% !important',
    display: 'inline-block',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#fff',
  },
  iconBox: {
    padding: theme.spacing(4),
    backgroundColor: '#fff',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    textAlign: 'center',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  icon: {
    borderRadius: '50%',
    border: `2px solid ${theme.palette.common.black}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    backgroundColor: 'rgba(26, 115, 233, 0.7)',
    color: '#fff',
  },
}));

function Catering() {
  const classes = useStyles();
  return (
    <Box id="why-us" className={`${classes.sectionBg} section-bg`} component="section">
              <Fade bottom timeout={1500}>

      <Container data-aos="fade-up">
        <Grid container spacing={4} style={{ display: 'flex', alignItems: 'center' }}>
          <Grid item xs={12} lg={4} data-aos="fade-up" data-aos-delay="100">
            <Box className={classes.whyBox}>
              <Typography variant="h3" gutterBottom>
                Catering
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos.
                Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </Typography>
              <Box textAlign="center">
                <a href="#" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="200">
                <Box className={classes.iconBox} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={classes.icon} style={{ border: '1px solid black', borderRadius: '50%', padding: 10 }}>
                    <Assignment fontSize="medium" />
                  </div>
                  <div>
                    <Typography variant="h6" gutterBottom style={{ lineHeight: '1.2em' }}>
                      Catering <br /> Events
                    </Typography>
                    <Typography variant="body1" align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="300">
                <Box className={classes.iconBox} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={classes.icon} style={{ border: '1px solid black', borderRadius: '50%', padding: 10 }}>
                    <Star fontSize="medium" />
                  </div>
                  <div>
                    <Typography variant="h6" gutterBottom style={{ lineHeight: '1.2em' }}>
                      Catering <br /> Events
                    </Typography>
                    <Typography variant="body1" align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="400">
                <Box className={classes.iconBox} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={classes.icon} style={{ border: '1px solid black', borderRadius: '50%', padding: 10 }}>
                    <Inbox fontSize="medium" />
                  </div>
                  <div>
                    <Typography variant="h6" gutterBottom style={{ lineHeight: '1.2em' }}>
                      Catering <br /> Events
                    </Typography>
                    <Typography variant="body1" align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Fade>
    </Box>
  );
}

export default Catering;
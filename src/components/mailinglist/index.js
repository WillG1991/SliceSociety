import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, TextField, Button } from '@material-ui/core';
import Pulse from 'react-reveal/Pulse';


const useStyles = makeStyles((theme) => ({
  joinMailingList: {
    background: 'white',
    width: '100vw',
    padding: theme.spacing(6),
    borderRadius: 20,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
  },
  joinMailingListTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  joinMailingListSubtitle: {
    color: '#888',
    marginBottom: theme.spacing(4),
  },
  joinMailingListForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "100%",
    marginTop: theme.spacing(4),
  },
  joinMailingListInput: {
    marginBottom: theme.spacing(2),
    width: "15%",
  },
  joinMailingListButton: {
    background: 'black',
    color: '#fff',
    '&:hover': {
      background: '#333',
    },
  },
}));

const MailingList = () => {
  const classes = useStyles();

  return (
    <Pulse>
    <Grid item xs={12} md={6}>
      <Box className={classes.joinMailingList}>
        <Typography variant="h4" className={classes.joinMailingListTitle}>
          Join Our Mailing List
        </Typography>
        <Typography variant="subtitle1" className={classes.joinMailingListSubtitle}>
          Sign up to receive updates about our latest products and services.
        </Typography>
        <Box className={classes.joinMailingListForm}>
          <TextField
            className={classes.joinMailingListInput}
            label="Enter your email"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Button variant="contained" className={classes.joinMailingListButton}>
            Subscribe
          </Button>
        </Box>
      </Box>
    </Grid>
    </Pulse>
  );
};

export default MailingList;

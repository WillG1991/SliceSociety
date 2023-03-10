import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, TextField, Button } from '@material-ui/core';
import Pulse from 'react-reveal/Pulse';


const useStyles = makeStyles((theme) => ({
  joinMailingList: {
    background: 'white',
    padding: theme.spacing(6),
    borderRadius: 0,
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
  textAlign: 'center',
  width: '100%',
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
    width: "30%",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  joinMailingListButton: {
    background: '#1A73E9',
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
    <Grid item xs={12} md={12}>
      <Box className={classes.joinMailingList}>
      <Typography variant="h2" align="center" style={{ fontFamily: "CustomFont"}}>
 Join Our <span style={{ color: '#1A73E9' }}>Mailing List</span> 
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

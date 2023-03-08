import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FFFFFF',
    color: '#1A73E9',
    boxShadow: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  button: {
    margin: theme.spacing(1),
  },
  homeButton: {
    marginLeft: 0,
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: 'center',
  },
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
<Toolbar className={classes.toolbar}>
        <Button className={classes.homeButton} color="inherit">Home</Button>
        <Button className={classes.button} color="inherit">About</Button>
        <Button className={classes.button} color="inherit">Menu</Button>
        <Button className={classes.button} color="inherit">Book</Button>
        <Button className={classes.button} color="inherit">Contact</Button>
        <Button className={classes.button} color="inherit">Order Now</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;

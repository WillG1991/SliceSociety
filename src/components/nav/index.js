import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1A73E9',
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
        <Button className={classes.button} color="inherit">Catering</Button>
        <Button className={classes.button} color="inherit">Contact</Button>
        <Button className={classes.button} color="inherit">Gallery</Button>
        <Button className={classes.button} color="inherit">Order Now</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FFFFFF',
    color: '#1A73E9',
    boxShadow: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
  button: {
    margin: theme.spacing(1),
  },
  homeButton: {
    marginLeft: 0,
    marginRight: theme.spacing(2),
    fontSize: "30px"
  },
  toolbar: {
    justifyContent: 'center',
    maxWidth: '100vw',
  },
  menuContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
}));

function AppHeader() {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuButtons = (
    <>
      <Button className={classes.button} color="inherit" href="#about" onClick={toggleMenu}>
        About
      </Button>
      <Button className={classes.button} color="inherit" href="#menu" onClick={toggleMenu}>
        Menu
      </Button>
      <Button className={classes.button} color="inherit" href="#book-a-table" onClick={toggleMenu}>
        Book
      </Button>
      <Button className={classes.button} color="inherit" href="#contact" onClick={toggleMenu}>
        Contact
      </Button>
      <Button className={classes.button} color="inherit" href="#order" onClick={toggleMenu}>
        Order Now
      </Button>
    </>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.homeButton} color="inherit" href="#hero">
        🍕
        </Button>
        <IconButton color="inherit" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {isMenuOpen && (
        <div className={classes.menuContainer}>
          {menuButtons}
        </div>
      )}
    </AppBar>
  );
}

export default AppHeader;

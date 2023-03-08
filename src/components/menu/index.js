import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BreakfastMenu from "./breakfast";
import LunchMenu from "./lunch";
import DinnerMenu from "./dinner";
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
  },
}));

const Menu = () => {
  const classes = useStyles();

  const [selectedItem, setSelectedItem] = useState("breakfast");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Zoom timeout={1000}>
    <div style={{paddingTop: "64px", paddingBottom: "64px", backgroundColor: "#f4f4f4"}}>
      <p style={{fontWeight: "bold", marginBottom: "32px", textAlign: "center", color: "#888"}}>
        Menu
      </p>
      <Typography variant="h3">
      Menu of Delicious Slices
          </Typography>
      <ul style={{display: "flex", justifyContent: "center", listStyle: "none"}}>
        <li style={{textDecoration: selectedItem === "breakfast" ? "underline" : "none", marginRight: "30px"}}
            onClick={() => handleItemClick("breakfast")}>
          Breakfast
        </li>
        <li style={{textDecoration: selectedItem === "lunch" ? "underline" : "none", marginRight: "30px"}}
            onClick={() => handleItemClick("lunch")}>
         Lunch
        </li>
        <li style={{textDecoration: selectedItem === "dinner" ? "underline" : "none", marginRight: "30px"}}
            onClick={() => handleItemClick("dinner")}>
          Dinner
        </li>
      </ul>
      {selectedItem === "breakfast" && (
             <Grid container spacing={2} className={classes.container}>
             <Grid item xs={6}>
        <BreakfastMenu/>
             </Grid>
           </Grid>
      )}
      {selectedItem === "dinner" && (
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={6}>
     <DinnerMenu/>
          </Grid>
        </Grid>
      )}
      {selectedItem === "lunch" && (
            <Grid container spacing={2} className={classes.container}>
            <Grid item xs={6}>
       <LunchMenu/>
            </Grid>
          </Grid>
      )}
    </div>
    </Zoom>
  );
};

export default Menu;

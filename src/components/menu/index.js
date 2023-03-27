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
    padding: '0 16px', // Moved padding here
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
      <div style={{paddingTop: "64px", paddingBottom: "64px", backgroundColor: "#f4f4f4"}} id="menu">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="p" gutterBottom style={{color: "grey"}}> 
            Menu
          </Typography>
          <Typography variant="h3" style={{ fontFamily: "CustomFont", fontSize: "4rem"}}>
            Menu of <span style={{color: '#1A73E9'}}> Delicious Slices </span>
          </Typography>
        </div>
        <ul style={{ display: "flex", justifyContent: "center", listStyle: "none" }}>
          <li style={{ textDecoration: "underline", textDecorationColor: "grey", textDecorationThickness: "2px", marginRight: "30px", color: selectedItem === "breakfast" ? "#1A73E9" : "", paddingBottom: "2px", fontSize: "1.2rem" }} onClick={() => handleItemClick("breakfast")}>
            Breakfast
          </li>
          <li style={{ textDecoration: "underline", textDecorationColor: "grey", textDecorationThickness: "2px", marginRight: "30px", color: selectedItem === "lunch" ? "#1A73E9" : "", paddingBottom: "2px", fontSize: "1.2rem" }} onClick={() => handleItemClick("lunch")}>
            Lunch
          </li>
          <li style={{ textDecoration: "underline", textDecorationColor: "grey", textDecorationThickness: "2px", marginRight: "30px", color: selectedItem === "dinner" ? "#1A73E9" : "", paddingBottom: "2px", fontSize: "1.2rem" }} onClick={() => handleItemClick("dinner")}>
            Dinner
          </li>
        </ul>
        {selectedItem === "breakfast" && (
          <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12}> 
              <BreakfastMenu/>
            </Grid>
          </Grid>
        )}
        {selectedItem === "dinner" && (
          <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12}> 
              <DinnerMenu/>
              </Grid>
</Grid>
)}
{selectedItem === "lunch" && (
<Grid container spacing={0} className={classes.container}>
<Grid item xs={12}> 
<LunchMenu/>
</Grid>
</Grid>
)}
</div>
</Zoom>
);
};

export default Menu;

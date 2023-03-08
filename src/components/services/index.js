import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Link,
} from "@material-ui/core";
import { Popover } from "@material-ui/core";
import { AccessTime, Favorite, LocalShipping } from "@material-ui/icons";
import breakfastLunchOne from "../../assets/images/menu/breakfastLunchOne.jpg"
import breakfastLunchTwo from "../../assets/images/menu/breakfastLunchTwo.jpg"
import dinnerOne from "../../assets/images/menu/dinnerOne.jpg"
import dinnerTwo from "../../assets/images/menu/dinnerTwo.jpg"

const useStyles = makeStyles((theme) => ({
  pageSection: {
    backgroundColor: "#f8f9fa",
    padding: theme.spacing(8, 0),
  },
  title: {
    marginTop: 0,
    textAlign: "center",
  },
  divider: {
    backgroundColor: theme.palette.text.primary,
    height: "1px",
    width: "50px",
    margin: theme.spacing(3, "auto"),
  },
  icon: {
    fontSize: "2rem",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  serviceTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));

export default function Services() {
const [anchorEl, setAnchorEl] = React.useState(null);
const [open, setOpen] = React.useState(false);
const [dinnerAnchorEl, setDinnerAnchorEl] = React.useState(null);
const [dinnerOpen, setDinnerOpen] = React.useState(false);
  const classes = useStyles();

//breakfast lunch pop up start//
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
//breakfast lunch pop up end//


//dinner pop up start//
  const handleDinnerClick = (event) => {
    event.preventDefault();
    setDinnerAnchorEl(event.currentTarget);
    setDinnerOpen(true);
  };

  const handleDinnerClose = () => {
    setDinnerAnchorEl(null);
    setDinnerOpen(false);
  };
  //dinner pop up end//

  return (
    <section className={classes.pageSection} id="services">
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Good Food, Good Stuff!
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} xs={12}>
            <div className="mt-5">
            <div className={classes.icon}>
            <AccessTime />
</div>
              <Typography variant="h4" className={classes.serviceTitle}>
                Hours:
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <p>Monday</p>
                <p>closed</p>
                <p>Tuesday to Thursday</p>
                <p>6:00am-3:00pm</p>
                <p>Friday</p>
                <p>6:00am-7:00pm</p>
                <p>Saturday</p>
                <p>6:00am-2:00pm & 4:00pm-7:00pm</p>
                <p>Sunday</p>
                <p>7:00am-2:00pm</p>
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
  <div className="mt-5">
    <div className={classes.icon}>
      <Favorite />
    </div>
    <Typography variant="h4" className={classes.serviceTitle}>
      Menu
    </Typography>
    <Typography variant="body1">
      <p>
        <Link href="#" onClick={handleClick}>
          Breakfast &amp; Lunch
        </Link>
      </p>
      <p>
      <Link href="#" onClick={handleDinnerClick}>
                  Dinner Menu
                </Link>
      </p>
      <p>
        <Link href="https://branchburgs-best.square.site/daily-specials">
          Daily Specials
        </Link>
      </p>
      <p>
        <Link href="https://branchburgs-best.square.site/s/order">
          Order Online
        </Link>
      </p>
    </Typography>
    <Popover
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: "center",
    horizontal: "center",
  }}
  transformOrigin={{
    vertical: "center",
    horizontal: "center",
  }}
>
  <img src={breakfastLunchOne} alt="Breakfast" />
  <img src={breakfastLunchTwo} alt="Lunch" />
</Popover>
<Popover
  open={dinnerOpen}
  anchorEl={dinnerAnchorEl}
  onClose={handleDinnerClose}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "center",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "center",
  }}
>
  <div style={{ display: "flex", flexDirection: "column" }}>
    <img src={dinnerOne} alt="Dinner Menu" style={{ maxWidth: "100%", marginBottom: 16 }} />
    <img src={dinnerTwo} alt="Dinner Menu" style={{ maxWidth: "100%" }} />
  </div>
</Popover>
  </div>
</Grid>
          <Grid item lg={4} md={6} xs={12}>
            <div className="mt-5">
            <div className={classes.icon}>
            <LocalShipping />
</div>
              <Typography variant="h4" className={classes.serviceTitle}>
            Local Deliveries
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <p>Tuesday to Friday</p>
            <p>9:00am-2:00pm</p>
            <p>Saturday &amp; Sunday</p>
            <p>9:00am-1:00pm</p>
          </Typography>
        </div>
      </Grid>
    </Grid>
  </Container>
</section>
);
}



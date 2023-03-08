import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    reservationImg: {
        height: "400px",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    form: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
    },
}));

const BookATable = () => {
    const classes = useStyles();

    return (
<section id="book-a-table" className="book-a-table" style={{ padding: "50px 100px" }}>
<Fade bottom timeout={2000}>

            <div className="container">
                <div className="section-header">
                    <Typography variant="body1" align="center">
                        Book A Table
                    </Typography>
                    <Typography variant="h2" align="center">
                        Book <span style={{ color: '#1A73E9' }}>Your Stay</span>With Us
                    </Typography>
                </div>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <div
  className={classes.reservationImg}
  style={{
    backgroundImage: `url(${require('../../assets/images/Book.png')})`,
  }}
/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className={classes.form}>
                            <form
                                action="forms/book-a-table.php"
                                method="post"
                                role="form"
                                className="php-email-form"
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="text"
                                            name="name"
                                            label="Your Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            inputProps={{ minLength: 4 }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="email"
                                            name="email"
                                            label="Your Email"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="text"
                                            name="phone"
                                            label="Your Phone"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            inputProps={{ minLength: 4 }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="text"
                                            name="date"
                                            label="Date"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            inputProps={{ minLength: 4 }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="text"
                                            name="time"
                                            label="Time"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            inputProps={{ minLength: 4 }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="number"
                                            name="people"
                                            label="# of People"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            inputProps={{ minLength: 1 }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            name="message"
                                            label="Message"
                                            variant="outlined" fullWidth
                                            multiline
                                            rows={5}
                                            required
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="text-center">
            <Button variant="contained"  type="submit" style={{ backgroundColor: '#1A73E9', color: "white" }}>
  Book a Table
</Button>
                                </div>
                                </Fade>
        </section>

    )
};

export default BookATable;

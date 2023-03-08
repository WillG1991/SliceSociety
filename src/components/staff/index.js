
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import ChefOne from "../../assets/images/chefs/chefOne.png"
import ChefTwo from "../../assets/images/chefs/chefTwo.png"
import ChefThree from "../../assets/images/chefs/chefThree.png"



const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#f4f4f4',
    padding: theme.spacing(8, 0),
  },
  sectionHeader: {
    marginBottom: theme.spacing(6),
    textAlign: 'center',
  },
  chefMember: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    boxShadow: '0px 5px 30px rgba(53, 53, 53, 0.2)',
    borderRadius: '10px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  memberImg: {
    position: 'relative',
    '&:hover > div': {
      opacity: 1,
    },
  },
  imgFluid: {
    width: '100%',
    height: 'auto',
  },
  social: {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    '& a': {
      margin: theme.spacing(1),
      color: '#333',
    },
  },
  memberInfo: {
    textAlign: 'center',
    paddingTop: theme.spacing(3),
  },
}));


const chefs = [
    {
      name: "Walter White",
      position: "Master Chef",
      image: ChefOne,
      bio: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    },
    {
      name: "Sarah Jhonson",
      position: "Patissier",
      image: ChefTwo,
      bio: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
    },
    {
      name: "William Anderson",
      position: "Cook",
      image: ChefThree,
      bio: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
    },
  ];
  

const ChefsSection = () => {
  const classes = useStyles();
return (
    <section id="chefs" className={classes.section + " section-bg"}>
    <Container>
    <div className={classes.sectionHeader}>
    <Typography variant="subtitle1">Chefs</Typography>
    <Typography variant="h2" align="center">
  Our <span style={{ color: '#1A73E9' }}>Professional</span> Chefs
</Typography>
    </div>
    <Grid container spacing={4}>
    {chefs.map((chef) => (
    <Grid item xs={12} sm={6} md={4} key={chef.name}>
    <Card className={classes.card}>
      
    <CardContent className={classes.cardContent}>
    <Typography gutterBottom variant="h5" component="h2">
    {chef.name}
    </Typography>
  
    <Typography variant="body2" color="textSecondary" component="p">
    {chef.bio}
    </Typography>
    </CardContent>
    </Card>
    </Grid>
    ))}
    </Grid>
    </Container>
    </section>
    );
    };
    
    export default ChefsSection;
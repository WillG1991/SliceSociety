import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function DinnerMenu() {
  const classes = useStyles();

  const dinnerItems = [
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil',
      price: '$14.99',
      image: 'http://www.italianfoodforever.com/wp-content/uploads/2008/05/pizzamargherita1.jpg',
    },
    {
      name: 'Meat Lover\'s Pizza',
      description: 'Pizza loaded with pepperoni, sausage, bacon, and ham',
      price: '$18.99',
      image: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2015/10/meatlovers-pizza-8w.jpg',
    },
    {
      name: 'Veggie Pizza',
      description: 'Pizza with roasted vegetables, mushrooms, and olives',
      price: '$16.99',
      image: 'https://www.dogtownpizza.com/wp-content/uploads/2021/04/vegetarian-pizza-with-addition-grilled-vegetables-and-aromatic-herbs-picture-id1127544478.jpg',
    },
    {
      name: 'Hawaiian Pizza',
      description: 'Pizza with ham, pineapple, and tomato sauce',
      price: '$15.99',
      image: 'https://food-images.files.bbci.co.uk/food/recipes/hawaiian_pizza_48114_16x9.jpg',
    },
    {
      name: 'White Pizza',
      description: 'Pizza with ricotta cheese, garlic, and olive oil',
      price: '$17.99',
      image: 'https://www.modernhoney.com/wp-content/uploads/2019/05/The-Best-3-Cheese-White-Pizza-3-500x375.jpg',
    },
    {
      name: 'Pizza Calzone',
      description: 'Folded pizza filled with cheese, tomato sauce, and your choice of toppings',
      price: '$19.99',
      image: 'https://cdn.tasteatlas.com/Images/Dishes/2bfdf993487d4995b8ed4ce3e99c5703.jpg',
    },
  ];

  return (
    
<div>
  <Typography variant="h3" align="center" style={{ color: '#1A73E9' }}>Dinner</Typography>

  <Grid container spacing={2}>
    {dinnerItems.map((item) => (
      <Grid item xs={12} sm={6} md={4} key={item.name}>
        <Card className={classes.card}>
          <img src={item.image} alt={item.name} style={{ objectFit: 'cover', height: 250 }} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3" style={{ color: "#1A73E9" }}>
              {item.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</div>
  );
}

export default DinnerMenu;
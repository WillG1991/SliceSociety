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

function LunchMenu() {
  const classes = useStyles();

  const lunchItems = [
    {
      name: 'Mushroom and Truffle',
      description: 'Pizza with tomato sauce, mushrooms, truffle oil, and mozzarella cheese',
      price: '$13.99',
      image: 'https://www.victoriamag.com/wp-content/uploads/2020/10/pizza_recipe.jpg',
    },
    {
      name: 'Caprese',
      description: 'Pizza with tomato sauce, fresh mozzarella cheese, cherry tomatoes, and basil',
      price: '$12.99',
      image: 'https://www.killingthyme.net/wp-content/uploads/2020/06/Caprese-Pizza-2.jpg',
    },
    {
      name: 'Sausage and Peppers',
      description: 'Pizza with tomato sauce, sausage, bell peppers, and mozzarella cheese',
      price: '$15.99',
      image: 'https://pizzatoday.com/wp-content/uploads/2023/01/sausageandpepperpizza.jpg',
    },
    {
      name: 'Spinach and Feta',
      description: 'Pizza with tomato sauce, spinach, feta cheese, and mozzarella cheese',
      price: '$13.99',
      image: 'https://peasandcrayons.com/wp-content/uploads/2015/03/easy-cheesy-pesto-spinach-flatbread-pizza-recipe-peasandcrayons-0569.jpg',
    },
    {
      name: 'Chicken Pesto',
      description: 'Pizza with pesto sauce, grilled chicken, red onions, and mozzarella cheese',
      price: '$16.99',
      image: 'https://theblondcook.com/wp-content/uploads/2013/08/pesto-chicken-pizza-1.jpg',
    },
    {
      name: 'Meatball',
      description: 'Pizza with tomato sauce, meatballs, ricotta cheese, and mozzarella cheese',
      price: '$17.99',
      image: 'https://farm8.staticflickr.com/7105/6994922850_b640b8d4da_o.jpg',
    },
  ];
  
  return (
    <div>
  <Typography variant="h3" align="center" style={{ color: '#1A73E9' }}>Breakfast</Typography>
    <Grid container spacing={2}>
      {lunchItems.map((item) => (
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

export default LunchMenu;
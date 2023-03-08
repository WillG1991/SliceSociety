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
      name: 'Steak',
      description: 'Grilled sirloin steak with roasted vegetables',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1605279404499-849fa41f270a',
    },
    {
      name: 'Pasta',
      description: 'Spaghetti with meatballs and marinara sauce',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1559847844-531569f2dbb9',
    },
    {
      name: 'Salmon',
      description: 'Pan-seared salmon with lemon butter sauce',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1565081179288-6ec5646f74ea',
    },
    {
      name: 'Burger',
      description: 'Classic cheeseburger with fries',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1565299621875-5dfeecbcebb1',
    },
    {
      name: 'Sushi',
      description: 'Assorted sushi rolls with wasabi and soy sauce',
      price: '$18.99',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    },
    {
      name: 'Pizza',
      description: 'Pepperoni pizza with tomato sauce and mozzarella cheese',
      price: '$16.99',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    },
  ];

  return (
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
              <Typography gutterBottom variant="h6" component="h3">
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DinnerMenu;
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Menu, MenuItem } from '@material-ui/core';

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

function BreakfastMenu() {
  const classes = useStyles();

  const breakfastItems = [
    {
        name: 'Eggs Benedict',
        description: 'Poached eggs, ham, and English muffin topped with hollandaise sauce',
        price: '$9.99',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4EVkzxPZnw8iUuaemnVxQenLZL_xkF8aWQ&usqp=CAU',
      },
      {
        name: 'Pancakes',
        description: 'Fluffy pancakes with maple syrup and butter',
        price: '$7.99',
        image: 'https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/fluffy-bran-pancakes.jpg.jpeg?itok=b0ZXPX3y',
      },
      {
        name: 'Omelette',
        description: 'Three-egg omelette with choice of fillings',
        price: '$8.99',
        image: 'https://www.thechunkychef.com/wp-content/uploads/2017/11/Cheesy-Mushroom-Omelet.jpg',
      },
      {
        name: 'French Toast',
        description: 'Thick-cut French toast with cinnamon sugar and whipped cream',
        price: '$6.99',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/french-toast_1-5bbce73.jpg?resize=768,574',
      },
      {
        name: 'Bagel and Cream Cheese',
        description: 'Freshly toasted bagel with cream cheese',
        price: '$4.99',
        image: 'https://media.newyorker.com/photos/5d13d9c28be7a80008baaf21/master/w_2560%2Cc_limit/Zeller-Cream-Cheese.jpg',
      },
    {
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, cheese, and choice of sausage or bacon in a flour tortilla',
      price: '$7.99',
      image: 'https://i0.wp.com/www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg?resize=1700%2C1272&ssl=1',
    },
  ];

  return (
    <div>
<Typography variant="h6" align="center" style={{ fontWeight: '300', color: '#999999' }}>Menu</Typography>
  <Typography variant="h3" align="center" style={{ color: '#1A73E9' }}>Breakfast</Typography>
    <Grid container spacing={2}>
      {breakfastItems.map((item) => (
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
export default BreakfastMenu;


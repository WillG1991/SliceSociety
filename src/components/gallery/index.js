import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Carousel } from 'react-carousel-minimal';
import portOne from "../../assets/images/portfolio/fullsize/1.jpeg"
import portTwo from "../../assets/images/portfolio/fullsize/2.jpeg"
import portThree from "../../assets/images/portfolio/fullsize/3.jpeg"
import portFour from "../../assets/images/portfolio/fullsize/4.jpeg"
import portFive from "../../assets/images/portfolio/fullsize/5.jpeg"
import portSix from "../../assets/images/portfolio/fullsize/6.jpeg"


const Gallery = () => {
  const data = [
    {
      image: portOne,
      caption: '',
    },
    {
      image: portTwo,
      caption: '',
    },
    {
      image: portThree,
      caption: '',
    },
    {
      image: portFour,
      caption: '',
    },
    {
      image: portFive,
      caption: '',
    },
    {
      image: portSix,
      caption: '',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  return (
    <Box id="gallery" className="gallery section-bg" component="section" style={{ backgroundColor: '#f7f7f7' }}>
      <Container data-aos="fade-up">
        <Box className="section-header">
          <Typography variant="h2" gutterBottom>
            Gallery
          </Typography>
          <Typography variant="p">
            Check <span>Our Gallery</span>
          </Typography>
        </Box>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px' }}>
          <Carousel
            data={data}
            time={4000}
            width="100%"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={false}
            slidesPerPage={6}
            clickToChange={true}
            centered={true}
            style={{ paddingBottom: '20px' }}
          />
        </div>
      </Container>
    </Box>
  );
};

export default Gallery;

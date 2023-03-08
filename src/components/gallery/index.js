import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Carousel } from 'react-carousel-minimal';
import galleryOne from "../../assets/images/gallery/galleryOne.png"
import galleryTwo from "../../assets/images/gallery/galleryTwo.png"
import galleryThree from "../../assets/images/gallery/galleryThree.png"
import galleryFour from "../../assets/images/gallery/galleryFour.png"
import galleryFive from "../../assets/images/gallery/galleryFive.png"
import gallerySix from "../../assets/images/gallery/gallerySix.png"


const Gallery = () => {
  const data = [
    {
      image: galleryOne,
      caption: '',
    },
    {
      image: galleryTwo,
      caption: '',
    },
    {
      image: galleryThree,
      caption: '',
    },
    {
      image: galleryFour,
      caption: '',
    },
    {
      image: galleryFive,
      caption: '',
    },
    {
      image: gallerySix,
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
          <Typography variant="p" gutterBottom>
            Gallery
          </Typography>
          <Typography variant="h2">
            Check <span style={{ color: "#1A73E9" }}>Our Gallery</span>
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

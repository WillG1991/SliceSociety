import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import galleryOne from "../../assets/images/gallery/galleryOne.png"
import galleryTwo from "../../assets/images/gallery/galleryTwo.png"
import galleryThree from "../../assets/images/gallery/galleryThree.png"
import galleryFour from "../../assets/images/gallery/galleryFour.png"
import galleryFive from "../../assets/images/gallery/galleryFive.png"
import gallerySix from "../../assets/images/gallery/gallerySix.png"
import gallerySeven from "../../assets/images/gallery/gallerySeven.png"

const Gallery = () => {
  const [images, setImages] = useState([
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
    gallerySeven,
  ].sort(() => Math.random() - 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(images => {
        const newImages = [...images];
        const firstImage = newImages.shift();
        newImages.push(firstImage);
        return newImages;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="gallery" className="gallery section-bg" component="section" style={{ backgroundColor: '#f7f7f7', width: '100vw' }}>
      <Container data-aos="fade-up">
        <Box className="section-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="p" gutterBottom style={{ color: "grey" }}> 
            Gallery
          </Typography>
          <Typography variant="h2" style={{ fontFamily: "CustomFont", fontSize: "4rem"}}>
            Check <span style={{ color: "#1A73E9" }}>Our Gallery</span>
          </Typography>
        </Box>
        <div 
        className="galleryImages"
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          paddingBottom: '20px', 
        }}>
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Fresh Baked Pizza ${index}`} 
              style={{ 
                width: '150px',
                height: index === 3 ? '300px' : index % 2 === 0 ? '200px' : '200px',
                objectFit: 'cover', 
                marginRight: '20px',
              }}
            />
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Gallery;

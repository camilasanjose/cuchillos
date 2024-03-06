// src/componentes/NewSection.jsx
import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        '/images/cuchillo.jpg',
        '/images/service 2.jpg',
        '/images/cuchillo3.jpg',
        '/images/cuchillos 4.jpg',
        '/images/service 1.jpg',
        '/images/service 3.jpg',
        '/images/tres cuchillos.jpg'
        // Agrega todas tus imágenes aquí
      ];
      return (
        <div className="gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Imagen ${index + 1}`} className="gallery-image" />
            ))}
          
        </div>
      );
     
    };

export default Gallery;





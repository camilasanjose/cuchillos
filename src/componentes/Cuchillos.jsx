import React from 'react';


const Cuchillos = () => {
    const images = [
        '/images/cuchillos alargada.webp',
   
      ];
      return (
        <div className="cuchillos">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Imagen ${index + 1}`} className="cuchillos-image" />
            ))}
          
        </div>
      );
     
    };

export default Cuchillos;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleButtonClick = () => {
    // Calcula la posición del centro de la página
    const middleOfPage = document.documentElement.scrollHeight / 4;

    // Desplazamiento suave hacia el centro de la página
    window.scrollTo({
      top: middleOfPage,
      behavior: 'smooth',
    });
  };

  return (
    <header style={headerStyle}>
      {/* Imagen */}
      <img src="/images/cuchilloLargo.webp" style={imgStyle} alt="Cuchillo" />

      {/* Enlace que lleva al centro de la página */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={buttonStyle} onClick={handleButtonClick}>
         Knives
        </button>
      </Link>
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  position: 'relative',
};

const imgStyle = {
  width: '100%',
  height: 'auto',
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  backgroundColor: 'black', // Color azul transparente
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Header;

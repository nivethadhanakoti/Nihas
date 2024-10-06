import React from 'react';
import './CarDecoration.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Car Deco_CD/CD_1.jpg';
import Img2 from '../../assets/services/Car Deco_CD/CD_2.jpg';
import Img3 from '../../assets/services/Car Deco_CD/CD_3.jpg';
import Img4 from '../../assets/services/Car Deco_CD/CD_4.jpg';
import Img5 from '../../assets/services/Car Deco_CD/CD_5.jpg';
import Img6 from '../../assets/services/Car Deco_CD/CD_6.jpg';

const CarDecoration = () => {
  const carDecorationImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, 
  ];

  return (
    <div className="car-decoration-page">
      <h3 className="car-decoration-heading">Car Decoration Gallery</h3>
      <div className="car-decoration-wrapper">
        {carDecorationImages.map((imgSrc, index) => (
          <div key={index} className="car-decoration-image-box">
            <img src={imgSrc} alt={`Car Decoration ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDecoration;

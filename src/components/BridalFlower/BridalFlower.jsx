import React from 'react';
import './BridalFlower.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Bridal Flowers_BR/BR_1.jpg';
import Img2 from '../../assets/services/Bridal Flowers_BR/BR_2.jpg';
import Img3 from '../../assets/services/Bridal Flowers_BR/BR_3.jpg';
import Img4 from '../../assets/services/Bridal Flowers_BR/BR_4.jpg';
import Img5 from '../../assets/services/Bridal Flowers_BR/BR_5.jpg';
import Img6 from '../../assets/services/Bridal Flowers_BR/BR_6.jpg';
import Img7 from '../../assets/services/Bridal Flowers_BR/BR_7.jpg';
import Img8 from '../../assets/services/Bridal Flowers_BR/BR_8.jpg';
import Img9 from '../../assets/services/Bridal Flowers_BR/BR_9.jpg';

const BridalFlower = () => {
  const bridalFlowerImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
  ];

  return (
    <div className="bridalflower-page">
      <h3 className="bridalflower-heading">Bridal Flower Gallery</h3>
      <div className="bridalflower-wrapper">
        {bridalFlowerImages.map((imgSrc, index) => (
          <div key={index} className="bouquet-image-box">
            <img src={imgSrc} alt={`Bridal Flower ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridalFlower;

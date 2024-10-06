import React from 'react';
import './Wreath.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/wreath_WR/WR_1.jpg';
import Img2 from '../../assets/services/wreath_WR/WR_2.jpg';
import Img3 from '../../assets/services/wreath_WR/WR_3.jpg';
import Img4 from '../../assets/services/wreath_WR/WR_4.jpg';
import Img5 from '../../assets/services/wreath_WR/WR_5.jpg';
// Add more imports as needed

const Wreath = () => {
  const wreathImages = [
    Img1, Img2, Img3, Img4, Img5,
  ];

  return (
    <div className="wreath-page">
      <h3 className="wreath-heading">Wreath Gallery</h3>
      <div className="wreath-wrapper">
        {wreathImages.map((imgSrc, index) => (
          <div key={index} className="wreath-image-box">
            <img src={imgSrc} alt={`Wreath ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wreath;

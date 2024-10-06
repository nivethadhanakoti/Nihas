import React from 'react';
import './Puberty.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_1.jpg';
import Img2 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_2.jpg';
import Img3 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_3.jpg';
import Img4 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_4.jpg';
import Img5 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_5.jpg';
import Img6 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_6.jpg';
import Img7 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_7.jpg';
import Img8 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_8.jpg';
import Img9 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_9.jpg';
import Img10 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_10.jpg';
import Img11 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_11.jpg';
import Img12 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_12.jpg';
import Img13 from '../../assets/services/Puberty Function,Nalangu and Baby shower_PU/PU_13.jpg';
// Add more imports as needed

const Puberty = () => {
  const pubertyImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,Img11, Img12, Img13,
  ];

  return (
    <div className="puberty-page">
      <h3 className="puberty-heading">Puberty Gallery</h3>
      <div className="puberty-wrapper">
        {pubertyImages.map((imgSrc, index) => (
          <div key={index} className="puberty-image-box">
            <img src={imgSrc} alt={`Puberty ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Puberty;

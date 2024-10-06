import React from 'react';
import './HouseWarming.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/House Warming_HW/HW_1.jpg';
import Img2 from '../../assets/services/House Warming_HW/HW_2.jpg';
import Img3 from '../../assets/services/House Warming_HW/HW_3.jpg';
import Img4 from '../../assets/services/House Warming_HW/HW_4.jpg';
import Img5 from '../../assets/services/House Warming_HW/HW_5.jpg';
import Img6 from '../../assets/services/House Warming_HW/HW_6.jpg';
import Img7 from '../../assets/services/House Warming_HW/HW_7.jpg';
import Img8 from '../../assets/services/House Warming_HW/HW_8.jpg';
import Img9 from '../../assets/services/House Warming_HW/HW_9.jpg';
import Img10 from '../../assets/services/House Warming_HW/HW_10.jpg';
import Img11 from '../../assets/services/House Warming_HW/HW_11.jpg';
import Img12 from '../../assets/services/House Warming_HW/HW_12.jpg';
import Img13 from '../../assets/services/House Warming_HW/HW_13.jpg';
import Img14 from '../../assets/services/House Warming_HW/HW_14.jpg';
import Img15 from '../../assets/services/House Warming_HW/HW_15.jpg';
import Img16 from '../../assets/services/House Warming_HW/HW_16.jpg';
import Img17 from '../../assets/services/House Warming_HW/HW_17.jpg';
import Img18 from '../../assets/services/House Warming_HW/HW_18.jpg';
import Img19 from '../../assets/services/House Warming_HW/HW_19.jpg';
// Add more imports as needed

const HouseWarming = () => {
  const houseWarmingImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,Img11, Img12, Img13, Img14, Img15, 
    Img16, Img17, Img18, Img19,
  ];

  return (
    <div className="housewarming-page">
      <h3 className="housewarming-heading">House Warming Gallery</h3>
      <div className="housewarming-wrapper">
        {houseWarmingImages.map((imgSrc, index) => (
          <div key={index} className="housewarming-image-box">
            <img src={imgSrc} alt={`House Warming ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseWarming;

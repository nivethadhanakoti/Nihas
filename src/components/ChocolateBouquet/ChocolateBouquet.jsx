import React from 'react';
import './ChocolateBouquet.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Chocolate Bouquet_CB/CB_1_Rs.450.jpg';
import Img2 from '../../assets/services/Chocolate Bouquet_CB/CB_2_Rs.450.jpg';
import Img3 from '../../assets/services/Chocolate Bouquet_CB/CB_3_Rs.500.jpg';
import Img4 from '../../assets/services/Chocolate Bouquet_CB/CB_4_Rs.600.jpg';
import Img5 from '../../assets/services/Chocolate Bouquet_CB/CB_5_Rs.1300.jpg';
import Img6 from '../../assets/services/Chocolate Bouquet_CB/CB_6_Rs.1600.jpg';
import Img7 from '../../assets/services/Chocolate Bouquet_CB/CB_7_Rs.1600.jpg';
import Img8 from '../../assets/services/Chocolate Bouquet_CB/CB_8_Rs.1600.jpg';
import Img9 from '../../assets/services/Chocolate Bouquet_CB/CB_9_Rs.1600.jpg';
import Img10 from '../../assets/services/Chocolate Bouquet_CB/CB_10_Rs.1600.jpg';
import Img11 from '../../assets/services/Chocolate Bouquet_CB/CB_11_Rs.1600.jpg';
import Img12 from '../../assets/services/Chocolate Bouquet_CB/CB_12_Rs.1600.jpg';
import Img13 from '../../assets/services/Chocolate Bouquet_CB/CB_13_Rs.1900.jpg';
import Img14 from '../../assets/services/Chocolate Bouquet_CB/CB_14_Rs.2100.jpg';
import Img15 from '../../assets/services/Chocolate Bouquet_CB/CB_15_Rs.2100.jpg';
import Img16 from '../../assets/services/Chocolate Bouquet_CB/CB_16_Rs.2100.jpg';
import Img17 from '../../assets/services/Chocolate Bouquet_CB/CB_17_Rs.2100.jpg';
import Img18 from '../../assets/services/Chocolate Bouquet_CB/CB_18_Rs.2100.jpg';
import Img19 from '../../assets/services/Chocolate Bouquet_CB/CB_19_Rs.2600.jpg';
import Img20 from '../../assets/services/Chocolate Bouquet_CB/CB_20_Rs.2600.jpg';
import Img21 from '../../assets/services/Chocolate Bouquet_CB/CB_21_Rs.2900.jpg';
import Img22 from '../../assets/services/Chocolate Bouquet_CB/CB_22_Rs.2900.jpg';
import Img23 from '../../assets/services/Chocolate Bouquet_CB/CB_23_Rs.3100.jpg';
import Img24 from '../../assets/services/Chocolate Bouquet_CB/CB_24_Rs.3100.jpg';
import Img25 from '../../assets/services/Chocolate Bouquet_CB/CB_25_Rs.3600.jpg';
import Img26 from '../../assets/services/Chocolate Bouquet_CB/CB_26_Rs.6000.jpg';

const ChocolateBouquet = () => {
  const chocolateBouquetImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
    Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
    Img21, Img22, Img23, Img24, Img25, Img26,
  ];

  return (
    <div className="chocolate-bouquet-page">
      <h3 className="chocolate-bouquet-heading">Chocolate Bouquet Gallery</h3>
      <div className="chocolate-bouquet-wrapper">
        {chocolateBouquetImages.map((imgSrc, index) => (
          <div key={index} className="chocolate-bouquet-image-box">
            <img src={imgSrc} alt={`Chocolate Bouquet ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChocolateBouquet;

import React from 'react';
import './Bouquet.css'; // Custom CSS for styling

// Importing images
import bouquetImg1 from '../../assets/services/Bouquet_BO/BO_1_Rs.140.jpg';
import bouquetImg2 from '../../assets/services/Bouquet_BO/BO_2_Rs.200.jpg';
import bouquetImg3 from '../../assets/services/Bouquet_BO/BO_3_Rs.350.jpg';
import bouquetImg4 from '../../assets/services/Bouquet_BO/BO_4_Rs.350.jpg';
import bouquetImg5 from '../../assets/services/Bouquet_BO/BO_5_Rs.350.jpg';
import bouquetImg6 from '../../assets/services/Bouquet_BO/BO_6_Rs.400.jpg';
import bouquetImg7 from '../../assets/services/Bouquet_BO/BO_7_Rs.450.jpg';
import bouquetImg8 from '../../assets/services/Bouquet_BO/BO_8_Rs.500.jpg';
import bouquetImg9 from '../../assets/services/Bouquet_BO/BO_9_Rs.500.jpg';
import bouquetImg10 from '../../assets/services/Bouquet_BO/BO_10_Rs.500.jpg';
import bouquetImg11 from '../../assets/services/Bouquet_BO/BO_11_Rs.500.jpg';
import bouquetImg12 from '../../assets/services/Bouquet_BO/BO_12_Rs.500.jpg';
import bouquetImg13 from '../../assets/services/Bouquet_BO/BO_13_Rs.500.jpg';
import bouquetImg14 from '../../assets/services/Bouquet_BO/BO_14_Rs.600.jpg';
import bouquetImg15 from '../../assets/services/Bouquet_BO/BO_15_Rs.600.jpg';
import bouquetImg16 from '../../assets/services/Bouquet_BO/BO_16_Rs.600.jpg';
import bouquetImg17 from '../../assets/services/Bouquet_BO/BO_17_Rs.600.jpg';
import bouquetImg18 from '../../assets/services/Bouquet_BO/BO_18_Rs.600.jpg';
import bouquetImg19 from '../../assets/services/Bouquet_BO/BO_19_Rs.600.jpg';
import bouquetImg20 from '../../assets/services/Bouquet_BO/BO_20_Rs.600.jpg';
import bouquetImg21 from '../../assets/services/Bouquet_BO/BO_21_Rs.600.jpg';
import bouquetImg22 from '../../assets/services/Bouquet_BO/BO_22_Rs.600.jpg';
import bouquetImg23 from '../../assets/services/Bouquet_BO/BO_23_Rs.600.jpg';
import bouquetImg24 from '../../assets/services/Bouquet_BO/BO_24_Rs.600.jpg';
import bouquetImg25 from '../../assets/services/Bouquet_BO/BO_25_Rs.600.jpg';
import bouquetImg26 from '../../assets/services/Bouquet_BO/BO_26_Rs.600.jpg';
import bouquetImg27 from '../../assets/services/Bouquet_BO/BO_27_Rs.600.jpg';
import bouquetImg28 from '../../assets/services/Bouquet_BO/BO_28_Rs.600.jpg';
import bouquetImg29 from '../../assets/services/Bouquet_BO/BO_29_Rs.600.jpg';
import bouquetImg30 from '../../assets/services/Bouquet_BO/BO_30_Rs.700.jpg';
import bouquetImg31 from '../../assets/services/Bouquet_BO/BO_31_Rs.700.jpg';
import bouquetImg32 from '../../assets/services/Bouquet_BO/BO_32_Rs.800.jpg';
import bouquetImg33 from '../../assets/services/Bouquet_BO/BO_33_Rs.800.jpg';
import bouquetImg34 from '../../assets/services/Bouquet_BO/BO_34_Rs.800.jpg';
import bouquetImg35 from '../../assets/services/Bouquet_BO/BO_35_Rs.800.jpg';
import bouquetImg36 from '../../assets/services/Bouquet_BO/BO_36_Rs.800.jpg';
import bouquetImg37 from '../../assets/services/Bouquet_BO/BO_37_Rs.850.jpg';
import bouquetImg38 from '../../assets/services/Bouquet_BO/BO_38_Rs.850.jpg';
import bouquetImg39 from '../../assets/services/Bouquet_BO/BO_39_Rs.850.jpg';
import bouquetImg40 from '../../assets/services/Bouquet_BO/BO_40_Rs.850.jpg';
// Add more imports as needed

const Bouquet = () => {
  const bouquetImages = [
    bouquetImg1,bouquetImg2,bouquetImg3,bouquetImg4,bouquetImg5,bouquetImg6,
    bouquetImg7,bouquetImg8,bouquetImg9,bouquetImg10,bouquetImg11,bouquetImg12,
    bouquetImg13,bouquetImg14,bouquetImg15,bouquetImg16,bouquetImg17,bouquetImg18,
    bouquetImg19,bouquetImg20,bouquetImg21,bouquetImg22,bouquetImg23,bouquetImg24,
    bouquetImg25,bouquetImg26,bouquetImg27,bouquetImg28,bouquetImg29,bouquetImg30,
    bouquetImg31,bouquetImg32,bouquetImg33,bouquetImg34,bouquetImg35,bouquetImg36,
    bouquetImg37,bouquetImg38,bouquetImg39,bouquetImg40,
  ];

  return (
    <div className="bouquet-page">
      <h3 className="bouquet-heading">Bouquet Gallery</h3>
      <div className="bouquet-wrapper">
        {bouquetImages.map((imgSrc, index) => (
          <div key={index} className="bouquet-image-box">
            <img src={imgSrc} alt={`Bouquet ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bouquet;

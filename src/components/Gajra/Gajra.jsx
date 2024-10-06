import React from 'react';
import './Gajra.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Gajra_GJ/GJ_1.jpg';
import Img2 from '../../assets/services/Gajra_GJ/GJ_2.jpg';
import Img3 from '../../assets/services/Gajra_GJ/GJ_3.jpg';
import Img4 from '../../assets/services/Gajra_GJ/GJ_4.jpg';
import Img5 from '../../assets/services/Gajra_GJ/GJ_5.jpg';
import Img6 from '../../assets/services/Gajra_GJ/GJ_6.jpg';
import Img7 from '../../assets/services/Gajra_GJ/GJ_7.jpg';
import Img8 from '../../assets/services/Gajra_GJ/GJ_8.jpg';
import Img9 from '../../assets/services/Gajra_GJ/GJ_9.jpg';
import Img11 from '../../assets/services/Gajra_GJ/GJ_11.jpg';
import Img12 from '../../assets/services/Gajra_GJ/GJ_12.jpg';
import Img13 from '../../assets/services/Gajra_GJ/GJ_13.jpg';
import Img14 from '../../assets/services/Gajra_GJ/GJ_14.jpg';
import Img15 from '../../assets/services/Gajra_GJ/GJ_15.jpg';
import Img16 from '../../assets/services/Gajra_GJ/GJ_16.jpg';
import Img17 from '../../assets/services/Gajra_GJ/GJ_17.jpg';
import Img18 from '../../assets/services/Gajra_GJ/GJ_18.jpg';
import Img19 from '../../assets/services/Gajra_GJ/GJ_19.jpg';
import Img20 from '../../assets/services/Gajra_GJ/GJ_20.jpg';
import Img21 from '../../assets/services/Gajra_GJ/GJ_21.jpg';
import Img22 from '../../assets/services/Gajra_GJ/GJ_22.jpg';
import Img23 from '../../assets/services/Gajra_GJ/GJ_23.jpg';
import Img24 from '../../assets/services/Gajra_GJ/GJ_24.jpg';
import Img25 from '../../assets/services/Gajra_GJ/GJ_25.jpg';
import Img26 from '../../assets/services/Gajra_GJ/GJ_26.jpg';
import Img27 from '../../assets/services/Gajra_GJ/GJ_27.jpg';
import Img28 from '../../assets/services/Gajra_GJ/GJ_28.jpg';
import Img29 from '../../assets/services/Gajra_GJ/GJ_29.jpg';
import Img30 from '../../assets/services/Gajra_GJ/GJ_30.jpg';
import Img31 from '../../assets/services/Gajra_GJ/GJ_31.jpg';
import Img32 from '../../assets/services/Gajra_GJ/GJ_32.jpg';
import Img33 from '../../assets/services/Gajra_GJ/GJ_33.jpg';
import Img34 from '../../assets/services/Gajra_GJ/GJ_34.jpg';
import Img35 from '../../assets/services/Gajra_GJ/GJ_35.jpg';
import Img36 from '../../assets/services/Gajra_GJ/GJ_36.jpg';
import Img37 from '../../assets/services/Gajra_GJ/GJ_37.jpg';
import Img39 from '../../assets/services/Gajra_GJ/GJ_39.jpg';
import Img40 from '../../assets/services/Gajra_GJ/GJ_40.jpg';
import Img41 from '../../assets/services/Gajra_GJ/GJ_41.jpg';
// Add more imports as needed

const Gajra = () => {
  const gajraImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,Img11, Img12, Img13, Img14, Img15, 
    Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26,
    Img26, Img27, Img28, Img29, Img30, Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img39, Img40, Img41,
  ];

  return (
    <div className="gajra-page">
      <h3 className="gajra-heading">Gajra Gallery</h3>
      <div className="gajra-wrapper">
        {gajraImages.map((imgSrc, index) => (
          <div key={index} className="gajra-image-box">
            <img src={imgSrc} alt={`Gajra ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gajra;

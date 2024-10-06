// Importing images
import React from 'react';
import './Trousseau.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Trousseau Packing_TP/TP_1.jpg';
import Img2 from '../../assets/services/Trousseau Packing_TP/TP_2.jpg';
import Img3 from '../../assets/services/Trousseau Packing_TP/TP_3.jpg';
import Img4 from '../../assets/services/Trousseau Packing_TP/TP_4.jpg';
import Img5 from '../../assets/services/Trousseau Packing_TP/TP_5.jpg';
import Img6 from '../../assets/services/Trousseau Packing_TP/TP_6.jpg';
import Img7 from '../../assets/services/Trousseau Packing_TP/TP_7.jpg';
import Img8 from '../../assets/services/Trousseau Packing_TP/TP_8.jpg';
import Img9 from '../../assets/services/Trousseau Packing_TP/TP_9.jpg';
import Img10 from '../../assets/services/Trousseau Packing_TP/TP_10.jpg';
import Img11 from '../../assets/services/Trousseau Packing_TP/TP_11.jpg';
import Img12 from '../../assets/services/Trousseau Packing_TP/TP_12.jpg';
import Img13 from '../../assets/services/Trousseau Packing_TP/TP_13.jpg';
import Img14 from '../../assets/services/Trousseau Packing_TP/TP_14.jpg';
import Img15 from '../../assets/services/Trousseau Packing_TP/TP_15.jpg';
import Img16 from '../../assets/services/Trousseau Packing_TP/TP_16.jpg';
import Img17 from '../../assets/services/Trousseau Packing_TP/TP_17.jpg';
import Img18 from '../../assets/services/Trousseau Packing_TP/TP_18.jpg';
import Img19 from '../../assets/services/Trousseau Packing_TP/TP_19.jpg';
import Img20 from '../../assets/services/Trousseau Packing_TP/TP_20.jpg';
import Img21 from '../../assets/services/Trousseau Packing_TP/TP_21.jpg';
import Img22 from '../../assets/services/Trousseau Packing_TP/TP_22.jpg';
import Img23 from '../../assets/services/Trousseau Packing_TP/TP_23.jpg';
import Img24 from '../../assets/services/Trousseau Packing_TP/TP_24.jpg';
import Img25 from '../../assets/services/Trousseau Packing_TP/TP_25.jpg';
import Img26 from '../../assets/services/Trousseau Packing_TP/TP_26.jpg';
import Img27 from '../../assets/services/Trousseau Packing_TP/TP_27.jpg';
import Img28 from '../../assets/services/Trousseau Packing_TP/TP_28.jpg';
import Img29 from '../../assets/services/Trousseau Packing_TP/TP_29.jpg';
import Img30 from '../../assets/services/Trousseau Packing_TP/TP_30.jpg';
import Img31 from '../../assets/services/Trousseau Packing_TP/TP_31.jpg';
import Img32 from '../../assets/services/Trousseau Packing_TP/TP_32.jpg';
import Img33 from '../../assets/services/Trousseau Packing_TP/TP_33.jpg';
import Img34 from '../../assets/services/Trousseau Packing_TP/TP_34.jpg';
import Img35 from '../../assets/services/Trousseau Packing_TP/TP_35.jpg';
import Img36 from '../../assets/services/Trousseau Packing_TP/TP_36.jpg';
import Img37 from '../../assets/services/Trousseau Packing_TP/TP_37.jpg';
import Img38 from '../../assets/services/Trousseau Packing_TP/TP_38.jpg';
import Img39 from '../../assets/services/Trousseau Packing_TP/TP_39.jpg';
import Img40 from '../../assets/services/Trousseau Packing_TP/TP_40.jpg';
// Add more imports as needed

const Trousseau = () => {
  const trousseauImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,Img11, Img12, Img13, Img14, Img15, 
    Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26,
    Img26, Img27, Img28, Img29, Img30, Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img39, Img40,
  ];

  return (
    <div className="trousseau-page">
      <h3 className="trousseau-heading">Trousseau Gallery</h3>
      <div className="trousseau-wrapper">
        {trousseauImages.map((imgSrc, index) => (
          <div key={index} className="trousseau-image-box">
            <img src={imgSrc} alt={`Trousseau ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trousseau;

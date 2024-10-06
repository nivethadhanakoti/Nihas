import React from 'react';
import './Wedding.css'; // Custom CSS for styling

// Importing images
import Img1 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_1.jpg';
import Img2 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_2.jpg';
import Img3 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_3.jpg';
import Img4 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_4.jpg';
import Img5 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_5.jpg';
import Img6 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_6.jpg';
import Img7 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_7.jpg';
import Img8 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_8.jpg';
import Img9 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_9.jpg';
import Img10 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_10.jpg';
import Img11 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_11.jpg';
import Img12 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_12.jpg';
import Img13 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_13.jpg';
import Img14 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_14.jpg';
import Img15 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_15.jpg';
import Img16 from '../../assets/services/Reception and Wedding Backdrop_RE/RE_16.jpg';
// Add more imports as needed

const Wedding = () => {
  const weddingImages = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,Img11, Img12, Img13,Img14, Img15, Img16, 
  ];

  return (
    <div className="wedding-page">
      <h3 className="wedding-heading">Wedding Gallery</h3>
      <div className="wedding-wrapper">
        {weddingImages.map((imgSrc, index) => (
          <div key={index} className="wedding-image-box">
            <img src={imgSrc} alt={`Wedding ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding;

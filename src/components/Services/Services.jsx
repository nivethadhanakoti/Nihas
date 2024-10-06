import React from 'react';
import './Services.css'; // Custom CSS for styling

// Importing images
import bouquetImg from '../../assets/services/display/Bouquet.jpg';
import bridalFlowersImg from '../../assets/services/display/Bridal flowers.jpg';
import carDecorationImg from '../../assets/services/display/Car Decoration.jpg';
import chocolateBouquetImg from '../../assets/services/display/Chocolate Bouquet.jpg';
import floralJewelleryImg from '../../assets/services/display/Floral Jewellery.jpg';
import gajraImg from '../../assets/services/display/Gajra.jpg';
import garlandImg from '../../assets/services/display/Garland.jpg';
import houseWarmingImg from '../../assets/services/display/House Warming.jpg';
import pubertyImg from '../../assets/services/display/Puberty,Nalangu _ Bridal Shower.jpg';
import trousseauPackingImg from '../../assets/services/display/Trousseau Packing.jpg';
import wreathImg from '../../assets/services/display/Wreath.jpg';
import receptionWeddingImg from '../../assets/services/display/Reception and Wedding.jpg';

export default function Services() {
  const servicesData = [
    {
      imgSrc: bouquetImg,
      title: "Bouquets",
      href: '/bouquet'
    },
    {
      imgSrc: bridalFlowersImg,
      title: "Bridal Flowers",
      href: '/bridal-flower' 
    },
    {
        imgSrc: carDecorationImg,
        title: "Car Decoration",
        href: '/car-decoration'
    },
    {
        imgSrc: chocolateBouquetImg,
        title: "Chocolate Bouquet",
        href: '/chocolate-bouquet'
    },
    {
      imgSrc: floralJewelleryImg,
      title: "Floral Jewellery",
      href: '/floral-jewellery'
    },
    {
      imgSrc: gajraImg,
      title: "Gajra",
      href: '/gajra'
    },
    {
      imgSrc: garlandImg,
      title: "Garland",
      href: '/garland'
    },
    {
      imgSrc: houseWarmingImg,
      title: "House Warming",
      href: '/house-warming'
    },
    {
      imgSrc: pubertyImg,
      title: "Puberty, Nalangu & Bridal Shower",
      href: '/puberty'
    },
    {
      imgSrc: trousseauPackingImg,
      title: "Trousseau Packing",
      href: '/trousseau'
    },
    {
      imgSrc: wreathImg,
      title: "Wreath",
      href: '/wreath'
    },
    {
      imgSrc: receptionWeddingImg,
      title: "Engagement, Reception and Wedding",
      href: '/wedding'
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <h3 className="services-heading">Explore Our Flower Works</h3>
        <div className="services-wrapper">
          {servicesData.map((service, index) => (
            <a key={index} href={service.href} className="service-box">
              <img src={service.imgSrc} alt={service.title} />
              <p className="service-title">{service.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './Shop.css'; // Your existing CSS
import Modal from './Modal'; // Import the Modal component

// Importing images for the shop
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
import chocolateBouquetImg1 from '../../assets/services/Chocolate Bouquet_CB/CB_1_Rs.450.jpg';
import chocolateBouquetImg2 from '../../assets/services/Chocolate Bouquet_CB/CB_2_Rs.450.jpg';
import chocolateBouquetImg3 from '../../assets/services/Chocolate Bouquet_CB/CB_3_Rs.500.jpg';
import chocolateBouquetImg4 from '../../assets/services/Chocolate Bouquet_CB/CB_4_Rs.600.jpg';
import chocolateBouquetImg5 from '../../assets/services/Chocolate Bouquet_CB/CB_5_Rs.1300.jpg';
import chocolateBouquetImg6 from '../../assets/services/Chocolate Bouquet_CB/CB_6_Rs.1600.jpg';
import chocolateBouquetImg7 from '../../assets/services/Chocolate Bouquet_CB/CB_7_Rs.1600.jpg';
import chocolateBouquetImg8 from '../../assets/services/Chocolate Bouquet_CB/CB_8_Rs.1600.jpg';
import chocolateBouquetImg9 from '../../assets/services/Chocolate Bouquet_CB/CB_9_Rs.1600.jpg';
import chocolateBouquetImg10 from '../../assets/services/Chocolate Bouquet_CB/CB_10_Rs.1600.jpg';

const Shop = ({ cartCount, setCartCount, setCartItems }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const products = [
    // Bouquet products
    {
      id: 1,
      name: 'BO_1',
      price: 140,
      image: bouquetImg1,
    },
    {
      id: 2,
      name: 'BO_2',
      price: 200,
      image: bouquetImg2,
    },
    {
      id: 3,
      name: 'BO_3',
      price: 350,
      image: bouquetImg3,
    },
    {
      id: 4,
      name: 'BO_4',
      price: 350,
      image: bouquetImg4,
    },
    {
      id: 5,
      name: 'BO_5',
      price: 350,
      image: bouquetImg5,
    },
    {
      id: 6,
      name: 'BO_6',
      price: 400,
      image: bouquetImg6,
    },
    {
      id: 7,
      name: 'BO_7',
      price: 450,
      image: bouquetImg7,
    },
    {
      id: 8,
      name: 'BO_8',
      price: 500,
      image: bouquetImg8,
    },
    {
      id: 9,
      name: 'BO_9',
      price: 500,
      image: bouquetImg9,
    },
    {
      id: 10,
      name: 'BO_10',
      price: 500,
      image: bouquetImg10,
    },
    // Chocolate Bouquet products
    {
      id: 11,
      name: 'CB_1',
      price: 450,
      image: chocolateBouquetImg1,
    },
    {
      id: 12,
      name: 'CB_2',
      price: 450,
      image: chocolateBouquetImg2,
    },
    {
      id: 13,
      name: 'CB_3',
      price: 500,
      image: chocolateBouquetImg3,
    },
    {
      id: 14,
      name: 'CB_4',
      price: 600,
      image: chocolateBouquetImg4,
    },
    {
      id: 15,
      name: 'CB_5',
      price: 1300,
      image: chocolateBouquetImg5,
    },
    {
      id: 16,
      name: 'CB_6',
      price: 1600,
      image: chocolateBouquetImg6,
    },
    {
      id: 17,
      name: 'CB_7',
      price: 1600,
      image: chocolateBouquetImg7,
    },
    {
      id: 18,
      name: 'CB_8',
      price: 1600,
      image: chocolateBouquetImg8,
    },
    {
      id: 19,
      name: 'CB_9',
      price: 1600,
      image: chocolateBouquetImg9,
    },
    {
      id: 20,
      name: 'CB_10',
      price: 1600,
      image: chocolateBouquetImg10,
    },
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, inCart: existingProduct.inCart + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, inCart: 1 }];
      }
    });

    setCartCount(prevCount => prevCount + 1); // Increment count by 1
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="shop-page">
      <h3 className="shop-heading">Shop Our Products</h3>

      {/* Bouquets Section */}
      <h2 className="kaushan-font" style={{ color: 'white' }}> Bouquets</h2>
      <div className="product-wrapper">
        {products.slice(0, 10).map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => openModal(product.image)}
            />
            <h3 style={{ color: 'black' }}>{product.name}</h3>
            <p style={{ color: 'black' }}>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)} style={{ backgroundColor: 'grey' }}>Add to Cart</button>
          </div>
        ))}
      </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      {/* Chocolate Bouquets Section */}
      <h2 className="kaushan-font" style={{ color: 'white' }}> Chocolate Bouquets</h2>
      <div className="product-wrapper">
        {products.slice(10).map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => openModal(product.image)}
            />
            <h3 style={{ color: 'black' }}>{product.name}</h3>
            <p style={{ color: 'black' }}>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)} style={{ backgroundColor: 'grey' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
};

export default Shop;

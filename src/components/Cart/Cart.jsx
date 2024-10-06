import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import qrcode from '../../assets/cart/qrcode.jpeg';
import './Cart.css';

const CartPage = ({ cartItems, setCartItems }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderAddress: '',
    senderDistrict: '',
    senderCountry: '',
    senderEmail: '',
    senderPhone: '',
    receiverName: '',
    receiverAddress: '',
    receiverDistrict: '',
    receiverCountry: '',
    receiverEmail: '',
    receiverPhone: '',
    deliveryDate: ''
  });

  const [samePerson, setSamePerson] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showOrderPlacedModal, setShowOrderPlacedModal] = useState(false);
  const form = useRef();  // EmailJS form reference

  useEffect(() => {
    if (samePerson) {
      setFormData(prevData => ({
        ...prevData,
        receiverName: prevData.senderName,
        receiverAddress: prevData.senderAddress,
        receiverDistrict: prevData.senderDistrict,
        receiverCountry: prevData.senderCountry,
        receiverEmail: prevData.senderEmail,
        receiverPhone: prevData.senderPhone
      }));
    }
  }, [samePerson]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowQRModal(true);
  };

  const handlePaymentDone = async () => {
    setShowQRModal(false);
    setShowOrderPlacedModal(true);

    const orderDetails = {
      senderName: formData.senderName,
      senderAddress: formData.senderAddress,
      senderDistrict: formData.senderDistrict,
      senderCountry: formData.senderCountry,
      senderEmail: formData.senderEmail,
      senderPhone: formData.senderPhone,
      receiverName: formData.receiverName,
      receiverAddress: formData.receiverAddress,
      receiverDistrict: formData.receiverDistrict,
      receiverCountry: formData.receiverCountry,
      receiverEmail: formData.receiverEmail,
      receiverPhone: formData.receiverPhone,
      flowerName: cartItems.map(item => item.name).join(', '),
      quantity: cartItems.reduce((acc, item) => acc + item.inCart, 0),
      totalAmt: calculateTotalPrice(),
      deliveryDate: formatDate(formData.deliveryDate),
    };

    try {
      const response = await fetch('https://sheet.best/api/sheets/1883a804-ef99-42cb-a0b6-3787dc3920d7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([orderDetails])
      });

      if (response.ok) {
        console.log('Order successfully added to Google Sheets');

        // Send email confirmation using EmailJS
        emailjs
        .send('service_pc09bti', 'template_e0k6mi9', {
            to_email: formData.senderEmail,  // dynamically passed email address
            sender_name: formData.senderName,
            flower_name: cartItems.map(item => item.name).join(', '),
            quantity: cartItems.reduce((acc, item) => acc + item.inCart, 0),
            total_amount: calculateTotalPrice(),
            delivery_date: formData.deliveryDate,
            receiver_name: formData.receiverName,
            receiver_address: formData.receiverAddress,
            receiver_district: formData.receiverDistrict,
            receiver_country: formData.receiverCountry,
            receiver_phone: formData.receiverPhone,
        }, 'GyLp-sPhXqX_h7Oc8')
        .then(
            () => {
            console.log('Email sent successfully');
            },
            error => {
            console.log('Failed to send email', error.text);
            }
        );

      } else {
        console.error('Failed to add order to Google Sheets');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Handle radio button change for sender/receiver
  const handleRadioChange = (e) => {
    setSamePerson(e.target.value === 'yes');
};

   // Update cart item quantity
   const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantities
    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === itemId ? { ...item, inCart: newQuantity } : item
        )
        );
    };

    // Remove cart item
    const removeCartItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inCart, 0);
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options); // en-GB format: DD/MM/YYYY
      };
      
  return (
    <div className="popup">
        <nav className="navbar" id="nav">
            {/* Navigation Component */}
        </nav>

        <div className="products-container">
            {/* Left Panel: Order Information */}
            <div className="productsincart">
                <h2 className="color-text">Order Information</h2>

                <br></br>
                {cartItems.length === 0 ? (
                    <div className="order_summary">
                        <div className="summary_card">
                            <h3 className="color-text" style={{ textAlign: 'center', padding: '50% 0px' }}>Your cart is empty!! :(</h3>
                        </div>
                    </div>
                ) : (
                    <>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>
                                    <p className="quantity-container">
                                        Quantity:
                                        <button className="small-button" onClick={() => updateCartItemQuantity(item.id, item.inCart - 1)}>-</button>
                                        {item.inCart}
                                        <button className="small-button" onClick={() => updateCartItemQuantity(item.id, item.inCart + 1)}>+</button>
                                        <button className="remove-button" onClick={() => removeCartItem(item.id)}>Remove</button> 
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="total-price">
                            <h3 className="color-text" style={{ textAlign: 'center'}}>Total Price: ₹{calculateTotalPrice()}</h3>
                        </div>
                    </>
                )}
            </div>

            {/* Right Panel: Payment Information */}
            <div className="payment_details">
                <h2>Payment Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="details_card">
                        <div className="sender_details">
                            <p>Enter sender details</p>
                        </div>
                        <div className="name_address">
                            <input
                                type="text" name="senderName" placeholder="Name*"
                                value={formData.senderName} onChange={handleChange} required
                            />
                            <input
                                type="text" name="senderAddress" placeholder="Address*"
                                value={formData.senderAddress} onChange={handleChange} required
                            />
                            <input
                                type="text" name="senderDistrict" placeholder="District*"
                                value={formData.senderDistrict} onChange={handleChange} required
                            />
                            <input
                                type="text" name="senderCountry" placeholder="Country*"
                                value={formData.senderCountry} onChange={handleChange} required
                            />
                            <input
                                type="email" name="senderEmail" placeholder="Enter email-address*"
                                value={formData.senderEmail} onChange={handleChange} required
                            />
                            <input
                                type="text" name="senderPhone" placeholder="Enter Phone Number*"
                                value={formData.senderPhone} onChange={handleChange} required
                            />
                        </div>

                        <fieldset>
                            <legend>Enter receiver details</legend>
                            <input
                                type="radio" name="copy" value="yes"
                                id="same_person" onChange={handleRadioChange}
                            />
                            <label htmlFor="same_person">Same person</label>
                            <input
                                type="radio" name="copy" value="no"
                                id="others" onChange={handleRadioChange}
                            />
                            <label htmlFor="others">Other person</label>
                        </fieldset>

                        <div className="name_address">
                            <input
                                type="text" name="receiverName" placeholder="First Name"
                                value={formData.receiverName} onChange={handleChange} disabled={samePerson}
                            />
                            <input
                                type="text" name="receiverAddress" placeholder="Address"
                                value={formData.receiverAddress} onChange={handleChange} disabled={samePerson}
                            />
                            <input
                                type="text" name="receiverDistrict" placeholder="District"
                                value={formData.receiverDistrict} onChange={handleChange} disabled={samePerson}
                            />
                            <input
                                type="text" name="receiverCountry" placeholder="Country"
                                value={formData.receiverCountry} onChange={handleChange} disabled={samePerson}
                            />
                            <input
                                type="email" name="receiverEmail" placeholder="Enter email-address*"
                                value={formData.receiverEmail} onChange={handleChange} required
                                disabled={samePerson}
                            />
                            <input
                                type="text" name="receiverPhone" placeholder="Enter Phone Number*"
                                value={formData.receiverPhone} onChange={handleChange} required
                                disabled={samePerson}
                            />
                            <label htmlFor="Delivery">Delivery Date</label>
                            <input
                                type="date" name="deliveryDate" value={formData.deliveryDate}
                                onChange={handleChange}required
                            />
                        </div>

                        <div className="proceed_payment">
                            <button type="submit">Proceed for Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {/* QR Code Modal */}
        {showQRModal && (
            <div className="modal">
                <div className="modal-content">
                    <img src={qrcode} alt="Scan Code" style={{ width: '500px', height: '300px' }} />
                    <div className="payment-done">
                        <button onClick={handlePaymentDone}>Payment Done</button>
                    </div>
                </div>
            </div>
        )}

        {/* Order Placed Confirmation Modal */}
        {showOrderPlacedModal && (
            <div className="modal">
                <div className="modal-content">
                    <h2>Order Placed Successfully!</h2>
                    <button onClick={() => setShowOrderPlacedModal(false)}>Close</button>
                </div>
            </div>
        )}
    </div>
);
};

export default CartPage;
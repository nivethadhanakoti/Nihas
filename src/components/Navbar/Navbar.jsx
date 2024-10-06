import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar({ cartCount }) { // Receive cartCount as a prop
    const [sidenav, setSidenav] = useState(false);
    const [sticky, setSticky] = useState(false);

    const menuIcon = <FontAwesomeIcon icon={faBars} />

    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <header id="site_header">
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
              <h1 className="navbar-title">Nihas Flower Works</h1>
            </div>
            <div className={`menu_items ${sidenav ? 'active' : ''}`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        About Us
                    </ScrollLink>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/cart" className="cart-icon-link">
                    <span className="cart-count">{cartCount}</span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
}

import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />;
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;
    const faEnvelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const faFacebookIcon = <FontAwesomeIcon icon={faFacebook} />;
    const faInstagramIcon = <FontAwesomeIcon icon={faInstagram} />;

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const visible = windowScroll > heightToHidden;
        console.log("Scroll Position:", windowScroll, "Button Visible:", visible); // Debugging log
        setIsVisible(visible);
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll); 
    }, []);

    return (
        <>
            <section className="footer-container">
                <footer className="footer-main">
                    <div className="footer-content">
                        <div className="heading">
                            <h1>Nihas Flower Works</h1>
                        </div>
                        <div className="contact">
                            <div>
                                {faPhoneIcon}
                                <p style={{ fontWeight: 'bold' }}>8870014385 / 9655111290</p>
                            </div>
                            <div>
                                {faEnvelopeIcon}
                                <p><a href="mailto:nihasflowerwork@gmail.com">nihasflowerwork@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="footer-social-container">
                            <a href="https://www.facebook.com/Nihas-Flower-Works-270017293639192/" className="social-icon">
                                {faFacebookIcon}
                            </a>
                            <a href="https://www.instagram.com/nihas.anu/?hl=en" className="social-icon">
                                {faInstagramIcon}
                            </a>
                        </div>
                    </div>
                    <p className="footer-credit">Best Online Store for Flowers</p>
                </footer>
            </section>

            {isVisible && (
                <div className="scroll_top" onClick={() => scrollToTop()}>
                    {faArrowUpIcon}
                </div>
            )}
        </>
    );
}

import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faClipboardCheck, faLightbulb, faCamera, faLeaf } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faPaletteIcon = <FontAwesomeIcon icon={faPalette} />
    const faClipboardCheckIcon = <FontAwesomeIcon icon={faClipboardCheck} />
    const faLightbulbIcon = <FontAwesomeIcon icon={faLightbulb} />
    const faCameraIcon = <FontAwesomeIcon icon={faCamera} />
    const faLeafIcon = <FontAwesomeIcon icon={faLeaf} />

    return (
        <>
        <section id="about">
            <div className="container">
                <div className="title_headling">
                    <h3>We highlight the personal touch and attention to detail!</h3>
                    <p class="justified">We believe that every occasion deserves to feel special and uniquely yours. 
                        By taking the time to understand your vision, preferences, and personality, 
                        we craft experiences that reflect who you are. From selecting the finest blooms 
                        for a simple bouquet to orchestrating an entire event, we focus on the little details 
                        that make a big impact. Our commitment to quality and personalization ensures that every 
                        arrangement, design, and moment is thoughtfully tailored to create a lasting impression, 
                        no matter the occasion.</p>
                </div>
                <div className="about_box_wrapper">
                    <div className="about_box">
                        <div className="about_icon">
                            {faPaletteIcon}
                        </div>
                        <div className="about_content">
                            <h5>Personalization</h5>
                            <p class="justified">We tailor every detail to reflect the client's unique style, vision, and 
                                preferences, ensuring each event or floral arrangement is a true reflection of 
                                their personality and story.</p>
                        </div>
                    </div>
                    <div className="about_box">
                        <div className="about_icon green_icon">
                            {faClipboardCheckIcon}
                        </div>
                        <div className="about_content">
                            <h5>Attention to Detail</h5>
                            <p class="justified">From the smallest floral accents to the overall event design, 
                                every detail is thoughtfully planned and executed with precision, 
                                ensuring nothing is overlooked at any stage of the process.</p>
                        </div>
                    </div>
                    <div className="about_box">
                        <div className="about_icon blue_icon">
                            {faLightbulbIcon}
                        </div>
                        <div className="about_content">
                            <h5>Creativity and Elegance</h5>
                            <p class="justified">Our designs and arrangements blend creativity with elegance, offering 
                                innovative ideas and artistic touches that elevate every event, making 
                                it both memorable and visually stunning.</p>
                        </div>
                    </div>
                </div>

                <div className="about_box_details">
                    <div className="about_col">
                        <div className="about_image">
                            <img src={AboutImage} alt="about" className="about_main"/>
                        </div>
                    </div>
                    <div className="about_col more_space">
                        <h3>Timeless Elegance, Crafted with Care</h3>
                        <p class="justified">Speaking about our commitment to creating experiences that transcend trends and stand 
                            the test of time, whether through the delicate beauty of our floral arrangements or 
                            the seamless execution of each event. Every detail is carefully curated, reflecting 
                            our deep respect for quality, tradition, and personalization. </p>

                        <div className="grid_info">
                            <div className="icon">{faCameraIcon}</div>
                            <div className="detail">
                                <h4>Create Lasting Memories</h4>
                                <p class="justified">We believe that every moment deserves to be captured and cherished and to create 
                                    beautiful memories that last a lifetime.</p>
                            </div>
                        </div>
                        <div className="grid_info">
                            <div className="icon green_icon">{faLeafIcon}</div>
                            <div className="detail">
                                <h4>Sustainable Practices</h4>
                                <p class="justified">We are committed to sustainability in every aspect of our business by 
                                    using eco-friendly materials and delivering exceptional service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

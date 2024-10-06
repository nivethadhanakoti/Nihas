import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.jpg';

export default function Home() {
  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                        CRAFTING DREAMS WITH <span>BLOOMS</span>
                    </h3>
                    <p class="justified">Nihas welcomes you with thousands of smile. With stylish and elegant presentation 
                        including top class service, Nihas stands exceptional with latest designs and updates.
                         Nihas is one destiny for all your decorations needs. With great quality, dedication, 
                         commitment, freshness and creativity Nihas is known for its uniqueness and will be 
                         available at any moment. Nihas promises that your event becomes a memorable one.</p>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} alt="Banner_image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

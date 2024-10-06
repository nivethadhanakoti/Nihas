import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact_wrapper">
            
            {/* Location and Timing Section */}
            <div className="contact_col">
              <div className="location-timing">
                <div className="location">
                  {/* Icon and text on the same line */}
                  <span className="icon-inline">
                    <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: 'white' }} />
                    <h1>ADDRESS</h1>
                  </span>
                  <hr />
                  <h1>Chidambaram Colony Road, Periyar Nagar, Palaniappa Complex, No 92, Erode, TN 638001</h1>
                </div>
                <br />
                <div className="timing">
                  {/* Icon and text on the same line */}
                  <span className="icon-inline">
                    <FontAwesomeIcon icon={faClock} size="2x" style={{ color: 'white' }} />
                    <h1>TIMINGS</h1>
                  </span>
                  <hr />
                  <h1>Mon-Sat: 9am - 8pm</h1>
                  <h1>Sun: 9am - 12:30pm</h1>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="contact_col">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Nihas%20Flowerworks%2C%20No.92%2C%20Palaniappa%20Complex%2C%20Periyar%20Nagar%2C%20Erode%2C%20638001&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    style={{ width: '100%', height: '400px' }}
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

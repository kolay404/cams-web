import React from 'react';
import './Footer.css';  // Import your CSS file here

const Footer = () => {
    return ( 
        <footer className="footer">

            {/* Logo Section */}
            <div className="footer-section logo3">
                <img src="/citu logo.png" alt="CITU Logo" className="logo3-image" />
            </div>

            {/* Contact Us Section */}
            <div className="footer-section contact-info">
                <h3 className="contact">Contact Us</h3>
                <div className="contact-item">
                    <img src="/location.png" alt="Location Icon" className="contact-icon" />
                    <span>N. Bacalso Avenue, Cebu City, Philippines 6000</span>
                </div>
                <div className="contact-item">
                    <img src="/telephone.png" alt="Phone Icon" className="contact-icon" />
                    <span>+63 32 411 2000 (trunkline)</span>
                </div>
                <div className="contact-item">
                    <img src="/email.png" alt="Email Icon" className="contact-icon" />
                    <span>camellebasillote@cit.edu</span>
                </div>
            </div>

            {/* Get in Touch Section */}
            <div className="footer-section social-media">
                <h3 className="touch">Get in Touch</h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com/CITUniversity" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook-logo.png" alt="Facebook Logo" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/cituniversity/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-logo2.png" alt="Instagram Logo" className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@cit.university" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube-logo.png" alt="YouTube Logo" className="social-icon" />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

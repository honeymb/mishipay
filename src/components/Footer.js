import React from 'react';
import '../styles/Styles.css';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="circle_shape_1 drdt-ignore-dark"></div>
      <div className="circle_shape_2"></div>
      <div className="footer-top">
        <div className="footer-description">
          <p>
            <img src="./images/logo-light.svg" alt="MishiPay Logo" className="footer-logo" />
            <p>MishiPay empowers shoppers to scan and pay for their shopping with their smartphones, rather than wasting time queuing at the checkout. With MishiPay’s technology, shoppers can now use their own phone to scan the barcode on items and pay for them using a wide variety of payment methods, then simply leave the store. No queueing; just Scan, Pay and Go.
            </p>
          </p>
        </div>
        <div className="circle_shape_1 drdt-ignore-dark"></div>
        <div className="footer-app-links">
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
            <img src="./images/google-play-badge.png" alt="Get it on Google Play" />
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/app-store-badge.png" alt="Get it on App Store" />
          </a>
          <a href="https://webapp.mishipay.com/store-locator" target="_blank" rel="noopener noreferrer">
            <img src="./images/Webapp.svg" alt="Use it on your Browser" />
          </a>
        </div>
      </div>

      {/* Footer Links Sections */}
      <div className="footer-links-section">
        {/* Useful Links Section */}
        <div className="footer-products">
          <h3>Useful Links</h3>
          
            <div>
              <p><a href=" #">About MishiPay</a></p>
              <p><a href="#">Case Studies</a></p>
              <p><a href="#">Book a Free Demo</a></p>
              <p><a href="#">See us in Action</a></p>
              <p><a href="#">Scan & Go Buyers Guide</a></p>
              <p><a href="#">MishiPay ROI Calculator</a></p>
              <p><a href="#">MishiPay Blog</a></p>
              <p><a href="#">Careers</a></p>
              <p><a href="#">Videos</a></p>
            </div>
           
        </div>

        {/* Our Products Section */}
        <div className="footer-products">
          <h3>Our Products</h3>
          <div className="subsection">
            <div>
              <p><a href="#">MishiPay Scan & Go</a></p>
              <p><a href="#">MishiPay Click & Collect</a></p>
              <p><a href="#">Self Checkout Kiosk</a></p>
            </div>
          </div>
        </div>

        {/* Why MishiPay Section */}
        <div className="footer-products">
          <h3>Why MishiPay</h3>
          
            <div>
              <p><a href="#">For Grocery & Convenience Stores</a></p>
              <p><a href="#">For Fashion & Accessories Stores</a></p>
              <p><a href="#">For Travel Stores</a></p>
              <p><a href="#">Integrations & Store Operations</a></p>
              <p><a href="#">Theft Prevention</a></p>
            </div>
        </div>

        {/* Helpful Links Section */}
        <div className="footer-helpful-links">
          <h3>Helpful Links</h3>
         
            <div>
              <p><a href="#">Contact Sales</a></p>
              <p><a href="#">Scan and Go FAQ's</a></p>
              <p><a href="#">MishiPay FAQ's</a></p>
              <p><a href="#">MishiPay Career FAQ's</a></p>
              <p><a href="#">MishiPay App FAQ's</a></p>
              <p><a href="#">MishiPay Dashboard FAQ's</a></p>
              <p><a href="#">Terms of Use</a></p>
              <p><a href="#">Privacy Policy</a></p>
              <p><a href="#">Politique de Confidentialité</a></p>
           
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="footer-social">
        <a href="https://www.facebook.com/mishipay/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/MishiPayApp" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/mishipayapp" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/mishipay/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCe083payRNjb7gW9kr2la8g" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-youtube"></i>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 | All Rights Reserved by MishiPay Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;

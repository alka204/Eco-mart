import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import qr from "../../assets/images/qr-code.png";
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>Eco-Mart</h2>

          <h4>Subscribe</h4>

          <p>Get 10% off your first order</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />

            <button>
              <FaTelegramPlane />
            </button>
          </div>
        </div>

        <div>
          <h4>Support</h4>

          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>

          <p>exclusive@gmail.com</p>

          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h4>Account</h4>

          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h4>Quick Link</h4>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Download App</h4>

          <p>Save $3 with App New User Only</p>

          <div className="download-app">
            <img src={qr} alt="QR Code" />

            <div>
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="copyright">
        © Copyright Eco-Mart 2026. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

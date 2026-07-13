import "./Hero.css";

import appleLogo from "../../assets/images/apple-logo.png";
import iphoneBanner from "../../assets/images/apple-banner.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Categories */}
        <div className="categories-menu">
          <ul>
            <li>
              Woman's Fashion <span>›</span>
            </li>
            <li>
              Men's Fashion <span>›</span>
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        {/* Right Banner */}
        <div className="hero-banner">
          <div className="hero-content">
            <div className="hero-left">
              <div className="apple-row">
                <img src={appleLogo} alt="Apple" />
                <span>iPhone 14 Series</span>
              </div>

              <h1>
                Up to 10%
                <br />
                off Voucher
              </h1>

              <button>Shop Now →</button>
            </div>

            <div className="hero-right">
              <img src={iphoneBanner} alt="iPhone" />
            </div>
          </div>

          <div className="slider-dots">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import "./FlashSales.css";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";

import gamepad from "../../assets/images/gamepad.png";
import keyboard from "../../assets/images/keyboard.png";
import monitor from "../../assets/images/monitor.png";
import chair from "../../assets/images/chair.png";

function FlashSales() {
  const calculateTimeLeft = () => {
    const target = new Date();
    target.setHours(target.getHours() + 72);

    const difference = target - new Date();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      image: gamepad,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
    },
    {
      image: keyboard,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
    },
    {
      image: monitor,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
      rating: 5,
      reviews: 99,
    },
    {
      image: chair,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 5,
      reviews: 99,
    },
  ];

  return (
    <section className="flash-sales">
      <div className="container">
        <div className="flash-header">
          <div className="flash-title-area">
            <SectionTitle label="Today's" title="Flash Sales" />

            <div className="countdown">
              <div>
                <small>Days</small>
                <h3>{String(timeLeft.days).padStart(2, "0")}</h3>
              </div>

              <span>:</span>

              <div>
                <small>Hours</small>
                <h3>{String(timeLeft.hours).padStart(2, "0")}</h3>
              </div>

              <span>:</span>

              <div>
                <small>Minutes</small>
                <h3>{String(timeLeft.minutes).padStart(2, "0")}</h3>
              </div>

              <span>:</span>

              <div>
                <small>Seconds</small>
                <h3>{String(timeLeft.seconds).padStart(2, "0")}</h3>
              </div>
            </div>
          </div>

          <div className="slider-buttons">
            <button>
              <i className="bi bi-arrow-left"></i>
            </button>

            <button>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Products */}

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>

        <div className="view-all-btn">
          <button>View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default FlashSales;

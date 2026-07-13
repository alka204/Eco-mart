import "./Explore.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";

import dogFood from "../../assets/images/dog-food.png";
import camera from "../../assets/images/camera.png";
import laptop from "../../assets/images/laptop.png";
import curology from "../../assets/images/curology.png";
import car from "../../assets/images/car.png";
import boots from "../../assets/images/boots.png";
import gamepad from "../../assets/images/gamepads.png";
import jacket from "../../assets/images/jackets.png";

function Explore() {
  const products = [
    {
      image: dogFood,
      title: "Breed Dry Dog Food",
      price: "100",
      rating: "3",
    },
    {
      image: camera,
      title: "CANON EOS DSLR Camera",
      price: "360",
      rating: "4",
    },
    {
      image: laptop,
      title: "ASUS FHD Gaming Laptop",
      price: "700",
      rating: "5",
    },
    {
      image: curology,
      title: "Curology Product Set",
      price: "500",
      rating: "4",
    },
    {
      image: car,
      title: "Kids Electric Car",
      price: "960",
      rating: "5",
    },
    {
      image: boots,
      title: "Jr. Zoom Soccer Cleats",
      price: "1160",
      rating: "4",
    },
    {
      image: gamepad,
      title: "GP11 Shooter USB Gamepad",
      price: "660",
      rating: "4",
    },
    {
      image: jacket,
      title: "Quilted Satin Jacket",
      price: "660",
      rating: "5",
    },
  ];

  return (
    <section className="explore">
      <div className="container">
        <div className="explore-header">
          <SectionTitle label="Our Products" title="Explore Our Products" />

          <div className="slider-buttons">
            <button>
              <i className="bi bi-arrow-left"></i>
            </button>

            <button>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="explore-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>

        <div className="explore-btn">
          <button>View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default Explore;

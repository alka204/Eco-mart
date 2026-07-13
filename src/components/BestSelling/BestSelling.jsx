import "./BestSelling.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";
import jacket from "../../assets/images/jacket.png";
import bag from "../../assets/images/bag.png";
import cpu from "../../assets/images/cpu.png";
import bookself from "../../assets/images/bookself.png";

function BestSelling() {
  const products = [
    {
      image: jacket,
      title: "The north coat",
      price: "260",
      rating: "5",
    },

    {
      image: bag,
      title: "Gucci duffle bag",
      price: "960",
      rating: "4.5",
    },

    {
      image: cpu,
      title: "RGB liquid CPU Cooler",
      price: "160",
      rating: "4.5",
    },

    {
      image: bookself,
      title: "Small BookSelf",
      price: "360",
      rating: "5",
    },
  ];

  return (
    <section className="best-selling">
      <div className="container">
        <div className="best-header">
          <SectionTitle label="This Month" title="Best Selling Products" />

          <button className="view-btn">View All Products</button>
        </div>

        <div className="products-grid">
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
      </div>
    </section>
  );
}

export default BestSelling;

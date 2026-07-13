import "./Categories.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryCard from "../CategoryCard/CategoryCard";

import {
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      title: "Phones",
      icon: <FaMobileAlt />,
    },
    {
      title: "Computers",
      icon: <FaLaptop />,
    },
    {
      title: "SmartWatch",
      icon: <FaClock />,
    },
    {
      title: "Camera",
      icon: <FaCamera />,
    },
    {
      title: "HeadPhones",
      icon: <FaHeadphones />,
    },
    {
      title: "Gaming",
      icon: <FaGamepad />,
    },
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-header">
          <SectionTitle label="Categories" title="Browse By Category" />

          <div className="slider-buttons">
            <button>
              <i className="bi bi-arrow-left"></i>
            </button>

            <button>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

import "./Services.css";

import { FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaTruck />,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      icon: <FaCheckCircle />,
      title: "MONEY BACK GUARANTEE",
      text: "We return money within 30 days",
    },
  ];

  return (
    <section className="services">
      <div className="container services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

import { useState } from "react";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Contact", "About", "Sign Up"];

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="container top-header-content">
          <div></div>

          <p className="offer-text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="shop-now"> Shop Now</span>
          </p>

          <div className="language">
            English <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            {/* Logo */}
            <a className="navbar-brand logo" href="#">
              Eco-Mart
            </a>

            {/* Mobile Toggle */}
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <i className="bi bi-list fs-2"></i>
            </button>

            {/* Navbar Content */}
            <div className="collapse navbar-collapse" id="menu">
              {/* Navigation */}
              <ul className="navbar-nav mx-auto">
                {navItems.map((item) => (
                  <li className="nav-item" key={item}>
                    <button
                      className={`nav-link ${active === item ? "active" : ""}`}
                      onClick={() => setActive(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Right Side */}
              <div className="header-right">
                <div className="search-box">
                  <input type="text" placeholder="What are you looking for?" />
                  <i className="bi bi-search"></i>
                </div>

                <i className="bi bi-heart fs-5"></i>

                <i className="bi bi-cart3 fs-5"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

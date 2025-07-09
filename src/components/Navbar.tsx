import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.mp4";
import { FaIgloo } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = () => {
    navigate("/NavigationPage");
  };

  return (
    <div className="claynosaurz-container">
      {/* Sticky Navbar */}
      <nav className={`navbar ${isNavbarHidden ? "hidden" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <h1>Arctic Penguin</h1>
          </div>
          <button className="desktop-menu-button" onClick={handleMenuClick}>
            <span className="menu-animate-text">Menu</span>
            <FaIgloo className="menu-animate-icon" size={20} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-noise"></div>
        <div className="hero-content hero-content-bottom">
          <div className="hero-text hero-text-small">
            <p className="hero-subtitle">MEET THE Pengins</p>
            <h1 className="hero-title">
              🧊 Arctic Penguin
              <br />
              The Movement IceAge
              <br />
              Penguins of @Movementlabs
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
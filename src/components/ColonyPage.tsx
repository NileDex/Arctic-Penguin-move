import React, { useEffect } from 'react';
import './ColonyPage.css';
import hero from '../assets/hero.mp4';

const ColonyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="colony-page-wrapper">
      <section className="colony-hero">
        <video className="colony-hero-video" autoPlay muted loop playsInline>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="colony-hero-overlay"></div>
        <div className="colony-hero-blend"></div>
        <div className="colony-hero-content">
          <h1 className="colony-hero-title">🐧 Colony</h1>
          <h2 className="colony-hero-sub">The Chosen Waddle</h2>
        </div>
      </section>
      <section className="colony-content-section">
        <div className="colony-content-container">
          <p className="colony-content-desc">
            Loyal, early supporters and builders of the ecosystem. The foundation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ColonyPage; 
import React, { useEffect } from 'react';
import './PriestPage.css';
import hero from '../assets/hero.mp4';

const PriestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="priest-page-wrapper">
      <section className="priest-hero">
        <video className="priest-hero-video" autoPlay muted loop playsInline>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="priest-hero-overlay"></div>
        <div className="priest-hero-blend"></div>
        <div className="priest-hero-content">
          <h1 className="priest-hero-title">🧊 Priest</h1>
          <h2 className="priest-hero-sub">Keepers of the Chill</h2>
        </div>
      </section>
      <section className="priest-content-section">
        <div className="priest-content-container">
          <p className="priest-content-desc">
            Creative leaders and lore-bearers who pass down ancient knowledge through art, memes, and culture.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PriestPage; 
import React, { useEffect } from 'react';
import './LorePage.css';
import hero from '../assets/hero.mp4';

const LorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lore-page-wrapper">
      <section className="lore-hero">
        <video className="lore-hero-video" autoPlay muted loop playsInline>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="lore-hero-overlay"></div>
        <div className="lore-hero-blend"></div>
        <div className="lore-hero-content">
          <h1 className="lore-hero-title">Lore</h1>
        </div>
      </section>
      <section className="lore-content-section">
        <div className="lore-content-container">
          <h2 className="lore-content-heading">Arctic Penguin: The Movement Ice Age ❄️​</h2>
          <p className="lore-content-text">
            <strong>Founding Story</strong><br /><br />
            In the depths of a forgotten Ice Age, sentient penguins constructed the Icebound Parthenon to protect a relic of immense power—the Frost blood Shard, a mythical source of unity and wisdom. Over time, the shard was buried beneath the frost and lost to memory.<br /><br />
            Centuries later, a new generation of penguins heard the ancient call and assembled in the Arctic Penguin server. These brave souls—known as the Waddle—revived the mission to guard and channel the shard’s power.<br /><br />
            The collection was born as a creative movement to rally the builders, explorers, and dreamers still standing strong with Movement Labs, even through the frostiest of times.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LorePage; 
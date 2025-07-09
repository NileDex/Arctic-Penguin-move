import React from 'react';
import { X } from 'lucide-react';
import './NavigationPage.css';
import { useNavigate } from 'react-router-dom';

const SNOWFLAKE_COUNT = 30;
function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const NavigationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-page-wrapper">
      <div className="snow-bg">
        {Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => {
          const left = randomBetween(0, 100);
          const size = randomBetween(0.8, 2.2);
          const duration = randomBetween(6, 14);
          const delay = randomBetween(0, 10);
          return (
            <span
              key={i}
              className="snowflake"
              style={{
                left: `${left}%`,
                fontSize: `${size}rem`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              ❄
            </span>
          );
        })}
      </div>
      <header className="nav-header">
        <div className="nav-logo"></div> {/* Removed text here */}
        <div className="nav-header-actions">
          <button className="nav-connect-btn">Connect</button>
          <button className="nav-close-btn" onClick={() => navigate("/")}>
            <X size={16} />
          </button>
        </div>
      </header>

      <main className="nav-main-content">
        <div className="nav-content-grid">
          <div className="nav-left-column">
            <div className="nav-about-section">
              <h1 className="nav-main-title">About</h1>
              <div className="nav-cards-scroll-container">
                <div className="nav-cards-wrapper">
                  <div className="nav-card-item">
                    <div className="nav-card-img characters"></div>
                    <div className="nav-card-label">Characters</div>
                  </div>
                  <div className="nav-card-item">
                    <div className="nav-card-img claynotopia"></div>
                    <div className="nav-card-label">Claynotopia</div>
                  </div>
                  <div className="nav-card-item" onClick={() => navigate('/lore')} style={{ cursor: 'pointer' }}>
                    <div className="nav-card-img lore"></div>
                    <div className="nav-card-label">Lore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-right-column">
            <div className="nav-links-scroll-container"> {/* Added scroll container */}
              <div className="nav-links-wrapper"> {/* Added wrapper for links */}
                <div className="nav-link-item">What's new</div>
                <div className="nav-link-item">Values & team</div>
                <div className="nav-link-item">Media</div>
                <div className="nav-link-item">Community</div>
                {/* Add more items if needed */}
              </div>
            </div>
          </div>
        </div>
      
      </main>
    </div>
  );
};

export default NavigationPage;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import World from '../assets/World.png';
import Cool_Penguin3 from '../assets/Cool_Penguin3.png';
import Royal_Penguin5 from '../assets/Royal_Penguin5.png';

const GameCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Origin story",
      buttonText: "LORE",
      image: Royal_Penguin5,
      gradient: "linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
      description: "Discover the beginnings of the Arctic Penguin collection and its lore."
    },
    {
      id: 2,
      title: "Arctic",
      buttonText: "Colony",
      image: World,
      gradient: "",
      description: "Explore the vibrant Arctic Colony and its creative community."
    },
    {
      id: 3,
      title: "Start Your Journey",
      buttonText: "WADDLE",
      image: Cool_Penguin3,
      gradient: "linear-gradient(135deg, rgba(255, 140, 0, 0.8) 0%, rgba(220, 20, 60, 0.6) 100%)",
      isWide: true,
      description: "Begin your adventure and join the Waddle!"
    }
  ];

  return (
    <div className="cards-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="cards-grid expanding-cards-grid">
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            className={`game-card expanding-card ${card.isWide ? 'wide-card' : ''} ${isVisible ? 'animate-in' : ''} ${activeIndex === index ? 'active' : ''}`}
            style={{
              animationDelay: `${index * 200}ms`
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className="card-background"
              style={{
                backgroundImage: card.image ? `url(${card.image})` : card.gradient,
              }}
            >
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                {activeIndex === index && (
                  <>
                    {card.description && (
                      <p className="card-description">{card.description}</p>
                    )}
                    <button
                      className="card-button"
                      onClick={e => {
                        e.stopPropagation();
                        if (card.buttonText.toLowerCase() === 'lore') navigate('/lore');
                        else if (card.buttonText.toLowerCase() === 'colony') navigate('/colony');
                        else if (card.title.toLowerCase() === 'waddle') navigate('/waddle');
                      }}
                    >
                      {card.buttonText}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="roadmap-button-container" style={{ textAlign: 'center', marginTop: '2rem', width: '100%' }}>
        <button
          className="roadmap-button"
          onClick={() => navigate('/roadmap')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            color: '#2d6a4f',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '0.9rem',
            background: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f0f0';
            e.currentTarget.style.color = '#2d6a4f';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#2d6a4f';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>Roadmap</span>
          <span style={{ fontSize: '1.2rem' }}>🗺️</span>
        </button>
      </div>
    </div>
  );
};

export default GameCards;
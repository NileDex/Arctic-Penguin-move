import { useEffect } from 'react';
import './RoadmapPage.css';
import hero from '../assets/hero.mp4';

const roadmap = [
  {
    title: 'Genesis Launch',
    date: 'Q1 2024',
    description: 'The Arctic Penguin collection is born. Early supporters join the Waddle and the first lore is written.'
  },
  {
    title: 'Community Building',
    date: 'Q2 2024',
    description: 'Events, contests, and collaborations to grow the Colony and foster creativity.'
  },
  {
    title: 'Lore Expansion',
    date: 'Q3 2024',
    description: 'New stories, characters, and art are added, deepening the world and its legends.'
  },
  {
    title: 'Movement Integration',
    date: 'Q4 2024',
    description: 'Partnerships and features with Movement Labs, bringing new utility and adventures.'
  },
  {
    title: 'Future Quests',
    date: '2025+',
    description: 'Ongoing updates, quests, and surprises as the Arctic Penguin universe evolves.'
  }
];

const RoadmapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="roadmap-page-wrapper">
      <section className="roadmap-hero">
        <video className="roadmap-hero-video" autoPlay muted loop playsInline>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="roadmap-hero-overlay"></div>
        <div className="roadmap-hero-blend"></div>
        <div className="roadmap-hero-content">
          <h1 className="roadmap-hero-title">Roadmap</h1>
          <p className="roadmap-hero-subtitle">Our Journey Through the Arctic</p>
        </div>
      </section>
      
      <section className="roadmap-timeline-section">
        <div className="roadmap-timeline-container">
          <div className="roadmap-timeline">
            {roadmap.map((item, idx) => (
              <div 
                className={`roadmap-timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} 
                key={idx}
              >
                <div className="roadmap-timeline-content">
                  <div className="roadmap-timeline-header">
                    <h2 className="roadmap-timeline-title">{item.title}</h2>
                    <span className="roadmap-timeline-date">{item.date}</span>
                  </div>
                  <p className="roadmap-timeline-desc">{item.description}</p>
                </div>
                <div className="roadmap-timeline-marker">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage; 
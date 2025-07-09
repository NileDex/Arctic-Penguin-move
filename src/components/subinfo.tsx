import React from "react";
import "./Subinfo.css";

// Import dinosaur images from assets
import Idea_Penguin14 from "../assets/Idea_Penguin14.png";
import Image from "../assets/image.png";
import Minion_Penguin24 from "../assets/Minion_Penguin24.png";
import Penguin1 from "../assets/Penguin1.png";
import Royal_Penguin5 from "../assets/Royal_Penguin5.png";
import Yoda_Penguin6 from "../assets/Yoda_Penguin6.png";
import Weed_Penguin6 from "../assets/Weed_Penguin6.png";
import Zeus from "../assets/Zeus.png";

const Subinfo = () => {
  const dinosaurs = [
    { name: "Idea",  image: Idea_Penguin14 },
    { name: "Zeus",  image: Image },
    { name: "Minion", image: Minion_Penguin24 },
    { name: "Bronto", image: Penguin1 },
    { name: "Royalty", image: Royal_Penguin5 },
    { name: "Yoda",  image: Yoda_Penguin6 },
    { name: "Weed",  image: Weed_Penguin6 },
  ];

  return (
    <div className="showcase-banner">
      <div className="showcase-content">
        <div className="content-left">
          <div className="content-right">
            <div className="dinosaur-display">
              <div className="dino-placeholder">
                <img
                  src={Zeus}
                  alt="Dinosaur Collection Showcase"
                  className="main-penguin-image"
                />
              </div>
            </div>
          </div>
        </div>
                
        <div className="content-left">
          <h1 className="main-title">Stay Frosty!</h1>
          <p className="description">
          We aim to preserve community culture, amplify creators, and serve as lore-rich motivators for the Movement fam.
          </p>
          <button className="cta-button">COLLECTION</button>
                    
          <div className="collections-grid">
            {dinosaurs.map((dino, index) => (
              <div key={index} className="collection-item">
                <div className={`collection-avatar ${dino.color}`}>
                  <img
                    src={dino.image}
                    alt={dino.name}
                    className="collection-image"
                  />
                </div>
                <span className="collection-name">{dino.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subinfo;

import './SpecialPage.css';

const SpecialPage = () => {
  return (
    <div className="special-page-wrapper">
      <div className="special-content-container">
        <h1 className="special-title">Special Roles</h1>
        <div className="special-roles-list">
          <div className="special-role-card">
            <h2 className="special-role-title">🐧 <strong>Colony</strong> <span className="special-role-sub">– <em>The Chosen Waddle</em></span></h2>
            <p className="special-role-desc">
              Loyal, early supporters and builders of the ecosystem. The foundation.
            </p>
          </div>
          <div className="special-role-card">
            <h2 className="special-role-title">🧊 <strong>Priest</strong> <span className="special-role-sub">– <em>Keepers of the Chill</em></span></h2>
            <p className="special-role-desc">
              Creative leaders and lore-bearers who pass down ancient knowledge through art, memes, and culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPage; 
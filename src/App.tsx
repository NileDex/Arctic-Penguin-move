import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Subinfo from './components/subinfo';
import GameCards from './components/GameCard';
import Footer from './components/Footer';
import NavigationPage from './components/NavigationPage';
import LorePage from './components/LorePage';
import SpecialPage from './components/SpecialPage';
import ColonyPage from './components/ColonyPage';
import PriestPage from './components/PriestPage';
import RoadmapPage from './components/RoadmapPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Subinfo/>
            <GameCards/>
            <Footer/>
          </>
        } />
        <Route path="/NavigationPage" element={<NavigationPage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/special" element={<SpecialPage />} />
        <Route path="/colony" element={<ColonyPage />} />
        <Route path="/waddle" element={<PriestPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
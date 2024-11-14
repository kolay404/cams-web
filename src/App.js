import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import LandingPage
import Sining from './pages/Sining'; // Import SiningPage
import Pagbasa from './pages/Pagbasa';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route points to LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Add route for SiningPage */}
        <Route path="/sining" element={<Sining />} />
        <Route path="/pagbasa" element={<Pagbasa />} />
      </Routes>
    </Router>
  );
}

export default App;

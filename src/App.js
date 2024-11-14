import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import LandingPage
import Sining from './pages/Sining'; // Import SiningPage
import Akademiko from './pages/Akademiko';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route points to LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Add route for SiningPage */}
        <Route path="/sining" element={<Sining />} />
        <Route path="/akademiko" element={<Akademiko />} />
      </Routes>
    </Router>
  );
}

export default App;

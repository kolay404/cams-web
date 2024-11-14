import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Sining from './pages/Sining';
import Pagbasa from './pages/Pagbasa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sining" element={<Sining />} />
        <Route path="/pagbasa" element={<Pagbasa />} />
      </Routes>
    </Router>
  );
}

export default App;

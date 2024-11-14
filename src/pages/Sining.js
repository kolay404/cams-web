import React from 'react';
import './Sining.css';  // Corrected import path
import Header from '../components/Header'; 

function Sining() {
  return (
    <div>
       {/* Use the Header Component */}
       <Header />
      {/* Red Background Section */}
    <div className="split-screen">
      <div className="left-column">
        <h1>Sining ng Pakikipagtalastasan</h1>
      </div>
      <div className="right-column">
        <p>This is the Sining ng Pakikipagtalastasan page.</p>
        {/* You can add more content here */}
      </div>
    </div>
  </div>
  );
}

export default Sining;  // <-- Export the correct component

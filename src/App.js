import './App.css';

function App() {
  return (
    <div className="split-screen">
      <div className="left-container">
        <img src="/citu logo.png" alt="CITU Logo" className="logo-image" />
      </div>
      <div className="right-container">
        <div className="button-container">
          <button className="moving-button button1">
            <div className="vertical-line left"></div> 
            <div className="vertical-line right"></div>
          </button>
          <button className="moving-button button2">
            <h3 className="button-title2">SINING NG PAKIKIPAGTALASTASAN</h3>
            <div className="vertical-line left"></div>
            <div className="vertical-line right"></div>
          </button>
          <button className="moving-button button3">
            <h3 className="button-title3">PAGBASA AT PAGSULAT SA IBA’T IBANG DISCIPLINA</h3>
            <div className="vertical-line left"></div>
            <div className="vertical-line right"></div>
          </button>
          <button className="moving-button button4">
            <div className="vertical-line left"></div> 
            <div className="vertical-line right"></div> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

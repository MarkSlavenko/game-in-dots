import React from 'react';
import './App.css';
import WinnersList from "./containers/WinnersList";
import GameArea from "./containers/GameArea";


function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="main-content col-12">
            <div className="row">
            <GameArea/>
            <WinnersList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

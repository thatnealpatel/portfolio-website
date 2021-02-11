import * as React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="min-nav">
        <li className="nav-item">
          {"<home/>"}
        </li>
        <li className="nav-item">
          {"<media/>"}
        </li>
        <li className="nav-item">
          {"<projects/>"}
        </li>
        <li className="nav-item">
          {"<resume/>"}
        </li>
      </nav>
    </div>
  );
}

export default App;

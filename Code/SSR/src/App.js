import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
function App() {

  console.log("Rendering App...");

  return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <section>

          <h4>Applcation Page generated from the server</h4>
          <Home name="Server-Side rendering"/>

          <Search/>
          
        </section>
      </div>
    
  );
}

export default App;

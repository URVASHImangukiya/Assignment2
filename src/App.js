import React from 'react';
import './App.css';
import KeyPadComponent from './Calculator';  // Import your calculator component

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <KeyPadComponent />  {/* Render the calculator */}
    </div>
  );
}

export default App;

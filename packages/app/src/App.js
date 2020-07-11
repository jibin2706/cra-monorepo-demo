import React from 'react';
import logo from './logo.svg';
import Text from '@jibin/common/components/Text';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>Common Component package</Text>
      </header>
    </div>
  );
}

export default App;

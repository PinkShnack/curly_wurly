import React from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <AppHeader className="App-header">
        <Home/>        
      </AppHeader>
    </div>
  );
}

export default App;

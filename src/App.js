import React from 'react';
import Home from './Pages/Home';
import './GlobalStyles/App.module.scss';

function App() {
  return (
    <GlobalStore>
      <Home />
    </GlobalStore>
  );
}

export default App;

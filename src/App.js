import React from 'react'

import Homepage from './feed/Homepage'
import MainNavBar from './shared/component/navigation/MainNavbar';


function App() {
  return (
    <div className="App h-full">
      <MainNavBar />
      <Homepage /> 
    </div>
  );
}

export default App;

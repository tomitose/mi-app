import NavBar from './components/NavBar.js'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'AppStyle.css'


// import cartlogo from '../public/cartlogo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar nombre= 'Tomas' apellido='Tosello'/>
        {/* <Logo/> */}
        {/* <img src={cartlogo} alt="logo" /> */}
      </header>

    </div>
  );
}

export default App;
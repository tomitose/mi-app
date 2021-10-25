import NavBar from './components/NavBar.js'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer'
// import './AppStyle.css'   ((No me toma el CSS ))





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>

    </div>
  );
}

export default App;
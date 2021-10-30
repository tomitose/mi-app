
import React, {useEffect} from 'react';
import NavBar from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer'
import './AppStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  useEffect (() => { // Es una funcion que se ejecuta de manera secundaria
    alert ('Se ejecuta al final del renderizado')
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer title='Bienvenido al Ecommerce'/>
      </header>
    </div>
  );
}

export default App;
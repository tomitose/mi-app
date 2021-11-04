
/*import React, {useEffect} from 'react';*/
import NavBar from './components/NavBar.js'
import { ItemListContainer } from './components/container/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer.jsx';
import './AppStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

/*   useEffect (() => { // Es una funcion que se ejecuta de manera secundaria (NO ESTARÍA FUNCIONANDO BIEN ESTE ALERT, NO SE PINTA ANTES EL RETURN)
    alert ('Se ejecuta al final del renderizado')
  },[]) */


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer title='Bienvenido al Ecommerce'/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
import React,{ useState } from 'react';
import { Button, FormControl, InputGroup, } from 'react-bootstrap';
import '../AppStyle.css'

export function ItemCount  ({stock,initial,onAdd}) {
    const [count, setCount] = useState(initial);

    const aumentarClick = () => {
     count < (stock) ? setCount(count + 1) : alert("No hay más stock");}
     

    const restarClick = () => {
    count > 1 ? setCount(count - 1) : alert ("No se puede menos");}
    
    


    return (
        <div className="ItemCompra">
            <InputGroup className="InputGroup">
                <Button onClick={restarClick}>-</Button>
                <FormControl type="number" value={count} style={{width:"50px"}}/>
                <Button onClick={aumentarClick}>+</Button>
            </InputGroup>
            <div className="ContenedorAdd">
                <Button className="AgregarCarrito" onClick={()=> onAdd (count)}>Agregar a Carrito</Button>
            </div>
        </div>
    );

}
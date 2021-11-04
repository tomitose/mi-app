import Item from "../Item"


function ItemList (productos) {
      (        
        productos.map(producto => <Item key={producto.id} producto={producto}/> )
    ) 
}

export default ItemList
// import React, { useState } from "react";
import { ItemCount } from "./ItemCount";
import ItemList from "./ItemList";

export function ItemListContainer ({title}) {

    const handleClick = (total) => {
        alert (`La cantidad agregada es ${total}`)
    }

    // const [users,setUsers] = useState([])

    return (
        <div>
            <h1 className='Titulo' >{title}</h1>
            <ItemCount stock= {10} initial= {1} onAdd= {handleClick}/>
            <ItemList />
        </div>
    )
}
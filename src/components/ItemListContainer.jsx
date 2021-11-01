import React from "react";
import { ItemCount } from "./ItemCount";

export function ItemListContainer ({title}) {
    const handleClick = (total) => {
        alert (`La cantidad agregada es ${total}`)
    }
    return (
        <div>
            <h1 className='Titulo' >{title}</h1>
            <ItemCount stock={10} initial={1} onAdd={handleClick}/>
        </div>
    )
}
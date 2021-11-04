// import React, { useState } from "react";
import { ItemCount } from "../ItemCount";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProductos } from "../services/getProducts";

export function ItemListContainer ({title}) {

    const[product,setProduct] = useState([]);


    useEffect(()=>{
        getProductos 
        .then (resolve => {
                setProduct(resolve)
        })

        .catch (error => console.log(error))
    },[])

    const handleClick = (total) => {
        alert (`La cantidad agregada es ${total}`)
    }

    return (
        <>
            <h1 className='Titulo' >{title}</h1>
            <ItemCount stock= {10} initial= {1} onAdd= {handleClick}/>
            <ItemList product={product}/>
        </>
    )
}
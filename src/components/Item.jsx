import { useState } from "react";

    



export const Item = () => {

    const productos = [
        { id:1, foto:<img src="./img/sneakers.jpg" className="Zapas" alt="Cart" />,title:"Nike Jordan",price:5000},
        { id:2, foto:<img src="./img/sneakers2.jpg" className="Zapas2" alt="Cart" />,title:"Nike Air",price:6000},
        { id:3, foto:<img src="./img/sneakers3.jpg" className="Zapas3" alt="Cart" />,title:"Nike 3",price:6500}
 ]


    const getProductos = new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        })

    const[product,setProduct] = useState([])


    getProductos 
    .then (resolve => {
            setProduct(resolve)
    },[])

    .catch (error => console.log(error))


        return (
            <div>
                {
                product.map(producto => <div key={producto.id} className="card w-50 mt-5">
                    <div className="card-header">
                        {producto.title}
                    </div>
                    <div className="card-body">
                        {producto.foto}
                    </div>
                    <div className="card-footer">
                        <h5> Precio : ${producto.price}</h5>
                        <button className="btn btn-outline-primary">
                            Detalle del producto
                        </button>
                    </div> 

                    </div>
                            
                )

                }
            </div>


        ) 
}


import React from "react" 
 
   
const Item = ({producto}) => {
    
    return (
            <div className="card w-50 mt-5">
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

export default Item


const Item = () => {
    
    const products = [
        { id:1, foto:<img src="./img/sneakers.jpg" className="Zapas" alt="Cart" />,title:"Nike",price:$5000},
        { id:2, foto:<img src="./img/sneakers2.jpg" className="Zapas2" alt="Cart" />,title:"Nike 2",price:$6000},
        { id:3, foto:<img src="./img/sneakers3.jpg" className="Zapas3" alt="Cart" />,title:"Nike 3",price:$6500}
    ]



    return(
        <div>
            {
             products.map(prod => <div key={prod.id} className="card w-50 mt-5">
                                    <div className="card-header">
                                        {prod.title}
                                    </div>

            
            )
            }

        </div>   
    )
}
export default Item
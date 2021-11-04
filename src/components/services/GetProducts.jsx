
 
const productos = [
        { id:1, foto:<img src="./img/sneakers.jpg" className="Zapas" alt="Cart" />,title:"Nike Jordan",price:5000},
        { id:2, foto:<img src="./img/sneakers2.jpg" className="Zapas2" alt="Cart" />,title:"Nike Air",price:6000},
        { id:3, foto:<img src="./img/sneakers3.jpg" className="Zapas3" alt="Cart" />,title:"Nike 3",price:6500}
 ]


 export const getProductos = new Promise((resolve)=> {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
})
    
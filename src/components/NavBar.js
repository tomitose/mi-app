//IMPORTS

//COMPONENT

//EXPORT


import { Navbar, Container, Nav } from "react-bootstrap";
import { CartWidget } from "./CartWidget";



const NavBar = () =>{
    return(
        <>
        <Navbar className="NavBar" fixed="top" expand="sm" collapseOnSelect>
            <Container>
            <Navbar.Brand href="#home">
                <img src="./img/cart.png" className="Logo" alt="CartEcommerce" />
                E-commerce
            </Navbar.Brand>

            <Navbar.Toggle/>

            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#">Ofertas</Nav.Link>
                    <Nav.Link href="#">Productos</Nav.Link>                               
                </Nav>

                    <CartWidget/> 
                    
            </Navbar.Collapse>
            </Container>

        </Navbar>

        </>
    )
}


export default NavBar;
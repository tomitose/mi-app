//IMPORTS

//COMPONENT

//EXPORT
import { Navbar, Container, Nav } from "react-bootstrap";
import { CartWidget } from "./CartWidget";



const NavBar = () =>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#">Ofertas</Nav.Link>
            <Nav.Link href="#">Tendencias</Nav.Link>
            
            <CartWidget/>
            
            </Nav>
            </Container>

        </Navbar>

        </>
    )
}


export default NavBar;
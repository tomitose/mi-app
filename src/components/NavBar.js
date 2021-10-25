//IMPORTS

//COMPONENT

//EXPORT
import { Navbar, Container, Nav } from "react-bootstrap";



// export function Logo () {
//     return
//     <img src='../public/cartlogo.png' alt='Logo'></img>
// } 

const NavBar = (props) =>{
    const {nombre,apellido} = props
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#">Ofertas</Nav.Link>
            <Nav.Link href="#">Tendencias</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <div>{nombre}</div>
        <div>{apellido}</div>
        </>
    )
}


export default NavBar;
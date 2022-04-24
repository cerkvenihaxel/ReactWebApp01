import React, { Component } from "react";
import { Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import user from '../img/user.png'
import cart from '../img/cart.png'


export default class NavBar extends Component{
render(){
    return(

        <div className="NavBarComp">
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><a className="brandText">¡Mamma Mia!</a></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Quiénes Somos</Nav.Link>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Lomitos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Delivery</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

          
        </NavDropdown>

        <a href="#cart"><img className='cartIcon' src={cart} alt="Carrito de compras"width={40} height={30} /></a>
        <a href="#user"><img className='userAvatar' src={user} alt="usuario avatar" width={37} height={27} /></a>



      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>


    );
}



}
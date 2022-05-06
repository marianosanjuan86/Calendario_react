import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Image  from 'react-bootstrap/Image'
import logo from "../assets/images/logo.png"
import Col from 'react-bootstrap/Col'
import Imagenes from "../components/Imagenes"



const Nav = () => {
    return ( 
        
        <Navbar className='navbar' expand="lg">
            <Col className='columnaNav'>
                <Image src={Imagenes.iconPuerta} className="icons"></Image>
                <Image src={logo} className="logoNav"></Image>
            </Col>   
            <Col className='columnaNav'>
                <h2>Martes 02/03</h2>
            </Col>
            <Col className='columnaNav'>
                <Image src={Imagenes.iconCalendario} className="icons"></Image>
                <Image src={Imagenes.iconLupa} className="icons"></Image>
                <Image src={Imagenes.iconImpresora} className="icons"></Image>
            </Col>    
        </Navbar>
     );
}
 
export default Nav ;
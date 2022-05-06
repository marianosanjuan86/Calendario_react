import React from 'react';
import logo from "../assets/images/logo.png"
import Image from 'react-bootstrap/Image'



const CargarLogo = () => {

  return ( 
  
    <div>
      <Image src={logo} alt="" className='logoInicio'></Image>
    </div>
  
  
    
     );
}
 
export default CargarLogo;
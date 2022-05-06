import React from 'react';
import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button'


const ButtonInicio = ({nombre}) => {


    return ( 
        <Button className="button" >
            {nombre}
        </Button>
     );
}

ButtonInicio.propTypes = {
    nombre: PropTypes.string.isRequired
}


 
export default ButtonInicio;
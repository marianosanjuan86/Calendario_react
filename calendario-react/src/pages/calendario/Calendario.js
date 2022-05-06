import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const Calendario = () => {
    return ( 
        <Container fluid className='containerCalendario'>
            <Col sm={1} className='ColumnasCalen'>Aca los nombres</Col>
            <Col sm={11}className='ColumnasCalen'><h1>Aca va el calendario</h1></Col>
        </Container>
     );
}
 
export default Calendario;
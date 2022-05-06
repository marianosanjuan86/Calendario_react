import React from 'react';
import ButtonInicio from '../../components/ButtonInicio';
import CargarLogo from '../../components/CargarLogo';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Index = () => {
    return ( 
        <>
        <Container>
            <Row>
                <section id='sectionTitulo'>
                    <h1> Tu Calendario </h1>
                </section> 
            </Row>   

            <section id='sectionLogo'>    
                <CargarLogo/>
            </section>

            <section id='sectionButton'>
                    <ButtonInicio nombre="Calendario"/>       
                    <ButtonInicio nombre="Administrador"/>
            </section>
        </Container>
        </>
     );
}
 
export default Index;
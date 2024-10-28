import React from 'react'
import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Hig from '../images/ero.png';
const About = () => {
  return (
    <div className='about'>
        <Container  className='aboutContainer'>
        <Row className='aboutwrapper'>
            <Col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur maxime 
            magnam repellendus rem qui dolorem ex, deleniti iste nobis et debitis cupiditate natus quo, 
            corporis dignissimos aperiam facere optio.
            </Col>
            <Col>2 of 2</Col>
    </Row>
    
 </Container>
 
    </div>
    
  )
}

export default About
import React from 'react'
import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Hig from '../images/about.png';
const About = () => {
  return (
    <div className='about'>
        <Container  className='aboutContainer'>
        <Row className='aboutwrapper'>
            <Col>
            <div className='aboutImageContainer'>
              <img src={Hig} alt='music' className='aboutImage' />
            </div>
              
            </Col>
            <Col>2 of 2</Col>
        </Row>
        <div className='discography'>

        </div>
    
 </Container>
 
    </div>
    
  )
}

export default About
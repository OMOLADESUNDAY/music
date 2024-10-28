import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.css'
import Carousel from 'react-bootstrap/Carousel';
import Hig from '../images/ero.png';
const Hero = () => {
  return (
   <Container  className='heroContainer'>
   <Row className='herowrapper'>
     <Col className='collw'>
     <Carousel className='carouselContainer'>
      <Carousel.Item className='vkfjfm'>
        {/* <img src={Hig} text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='vkfjfm'>
        {/* <img src={Hig} text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='vkfjfm'>
        {/* <img src={Hig} text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </Col>
     <Col className='secondHeroDiv'>
     </Col>
   </Row>
</Container>
  )
}

export default Hero
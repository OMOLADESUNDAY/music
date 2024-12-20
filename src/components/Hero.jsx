import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
const Hero = () => {
  return (
   <Container  className='heroContainer'>
   <Row className='herowrapper'>
     <Col className='collw'>
     <Carousel className='carouselContainer'>
      <Carousel.Item className='vkfjfm'>
        <Carousel.Caption>
          <h1>Stream. Connect. Experience.</h1>
          <p>Welcome to the ultimate destination for music lovers everywhere!</p>
          <div className='HeroBtn'>
          <Button variant="primary" >Buy Ticket</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='vkfjfm'>
        <Carousel.Caption>
          <h1>Unlimited Streaming</h1>
          <p>Dive into a world of music with an extensive library that spans every genre, mood, and moment. Explore your favorites or discover something new!</p>
          <div className='HeroBtn'>
          <Button variant="primary" >Buy Ticket</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='vkfjfm'>
        {/* <img src={Hig} text="Third slide" /> */}
        <Carousel.Caption>
          <h1>High-Quality Sound</h1>
          <p>
          Experience studio-quality sound that makes you feel like you’re right there in the room with your favorite artists
          </p>
          <div className='HeroBtn'>
          <Button variant="primary" >Buy Ticket</Button>{' '}
          </div>
          
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
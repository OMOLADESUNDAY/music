import React from 'react'
import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Carousel from 'react-bootstrap/Carousel';
import Hig from '../images/about.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AlbumAndSingle } from './data';
import { FaApple } from "react-icons/fa";
import SingleAndAlbum from './SingleAndAlbum';
const About = () => {
  return (
    <div className='about'>
        <Container  className='aboutContainer'>
        <Row className='aboutwrapper'>
            <Col className='aboutImageColumn'>
                <img src={Hig} alt='music' className='aboutImage' />
            </Col>
            <Col className='secnff'>
              <h5>About Us</h5>
              <h3>The Electro Vibe</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptatem dolor 
                ad quaerat odit aut, suscipit asperiores error labore illo blanditiis aperiam  
                veritatis atque qui recusandae totam magnam at doloremque?
              </p>
              <Button as={Link} variant="primary" >Contact Us</Button>{' '}
            </Col>
        </Row>
       
       
    
 </Container>
    <div className='discography'>
      <Row className='discographyBuyContainer'>
        <Col>
          <h4>Our Discography</h4>
          <h1>newest albums & singles</h1>
        </Col>
        <Col>
        <Button variant="primary" className='buybtn'><FaApple/>BUY ON ITUNES</Button>{' '}
        </Col>
      </Row>
      <Row className='albumrow'>
          {AlbumAndSingle.map((singleAndAlbumItem)=>{
            return <SingleAndAlbum key={singleAndAlbumItem.id} SingleAndAlbum={singleAndAlbumItem}/>
          })}
      </Row>
     </div>
    </div>
    
  )
}

export default About
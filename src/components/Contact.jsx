import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './contact.css'
import contactImg from '../images/footer-img (3).jpg'
const Contact = () => {
  return (
        <Row className='contact-container'>
            <Col className='contact-left-wrapper' lg={8} > 
                <h4 className='contact-us-text'>Contact us</h4>
                <h1>Got a Question?</h1>
                <form action="">
                    <Row className='name-email'>
                        <Col lg={6} className='name-container'><input className='email' type="text" placeholder='Name' /></Col>
                        <Col lg={6} className='email-container'><input className='email' type="email" placeholder='Email'/></Col>
                    </Row>
                    <Row className='name-email'>
                        <textarea name="" id="" placeholder='Message' className='email' rows={5}></textarea>
                    </Row>
                    <Button className='send-btn'>Primary</Button>
                </form>
            </Col>
            <Col className='contact-img-container'>
                <img className='contact-img' src={contactImg} alt="" />
            </Col>
        </Row>
  )
}

export default Contact
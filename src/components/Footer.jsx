import React from 'react'
import './footer.css'
import Contact from './Contact'
import { Col, Row } from 'react-bootstrap'
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer-container'>
        <Contact/>
        <section>
          <Row className='middle-footer-container'>
            <Col className='footer-wrapper'>
              <div className='footer-location-container'> <IoLocation className='location-logo' /> </div>
              <div>
                  <p>333 Middle Winchendon Rd,</p>
                  <p>Rindge, NH 03461</p>
              </div>
            </Col>
            <Col className='footer-wrapper'>
            <div className='footer-location-container'> <IoLocation className='location-logo' /> </div>
              <div>
                  <p>125-711-811 | 125-668-886</p>
                  <p>Support.music@gmail.com</p>
              </div>
            </Col>
            <Col>
              <div className='social-link-container'>
                  <FaFacebookF/>
                  <FaTwitter/>
                  <FaYoutube/>
                  <FaInstagram/>
              </div>
            </Col>
          </Row>
          <hr className='horizontal-line'/>
          <div className='lower-footer-text'>
            <small className=''>Copyright © 2024 All rights reserved | This template is made by spydro_tech</small>
          </div>
        </section>
    </div>
  )
}

export default Footer
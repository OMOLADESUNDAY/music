import React from 'react'
import { Col } from 'react-bootstrap'

const SingleAndAlbum = ({SingleAndAlbum}) => {
    const {image,name,title}=SingleAndAlbum
  return (
    <Col className='albumContainer'>
        <img src={image} alt="title" className='albumImage'/>
        <h3>{name}</h3>
        <p>{title}</p>
    </Col>
  )
}

export default SingleAndAlbum
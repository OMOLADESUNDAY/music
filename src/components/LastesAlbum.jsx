import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const LastesAlbum = () => {
    const backgroundRef=useRef(null)
  return (
    <Container>
        <Row>
            <Col ref={backgroundRef}>
            
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}

export default LastesAlbum
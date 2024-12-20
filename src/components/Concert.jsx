import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { concertData } from './data'
import { IoLocation } from "react-icons/io5";
import "./concert.css"
const Concert = () => {
    const [concertShow,setConcertShow]=useState(5)
    const [show,setShow]=useState(false)
    const viewAll=()=>{
        if (show) {
            setConcertShow(5); // Reset to show only 5 items
          } else {
            setConcertShow(concertData.length); // Show all items
          }
          setShow(!show);
    }
  return (
    <section className='concert-container'>
        <div className='concert-up-wrapper'>
        <div>
            <h4>Upcoming Shows</h4>
            <h1>WHEN WE ALL FALL ASLEEP</h1>
        </div>
        <div>
            <button className='send-btn' onClick={viewAll}>{show ? 'View less':'veiw more'}</button>
        </div>
    </div>
    <section>
        {concertData.slice(0,concertShow).map((concert)=>{
            return(
                <Row className='concert-row' key={concert.id}>
                <Col lg={2}>
                <h1>{concert.date.day}</h1>
                <p>{concert.date.month}</p>
                </Col>
                <Col lg={4}>
                <div>
                <h3>{concert.venue.place}</h3>
                    <small>{concert.venue.musictype}|{concert.venue.lang}|{concert.venue.ageRange}|
                    {concert.venue.duration}</small>
                </div>
                </Col>
                <Col lg={2}><IoLocation /><small>{concert.location}</small></Col>
                <Col><h5>{concert.time}</h5></Col>
                <Col><button className='buy-button'>Buy Ticket</button></Col>
            </Row>
            )
        })}
    </section>
    </section>
    
  )
}

export default Concert
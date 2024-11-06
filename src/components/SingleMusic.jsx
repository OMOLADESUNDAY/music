import React from 'react'
import { Link } from 'react-router-dom'
import { FaAmazon, FaPlay } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { ImCloud } from "react-icons/im";
import './singlemusic.css'
const SingleMusic = () => {
  return (
    <section className='single-music-container'>
        <article className='single-music-left-section'>
            <button className='right-play'><FaPlay /></button>
            <div className='inner-right-play'>
                <h5 className='music-title'>music title</h5>
                <p>name</p>
            </div>
        </article>
        <article className='single-music-right-section' >
            <div className='single-music-link'>
                <Link><FaAmazon /></Link>
                <Link><FaSpotify /></Link>
                <Link><FaApple/></Link>
                <Link><ImCloud /></Link>
            </div>
            <p className='music-lenght'>
                0:00
            </p>
        </article>

    </section>
  )
}

export default SingleMusic
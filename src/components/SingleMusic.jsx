import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaAmazon, FaPlay } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { ImCloud } from "react-icons/im";
import './singlemusic.css'
const SingleMusic = ({song,playhandler}) => {
    const {id,title,name}=song
    const hoverRef=useRef(null)
    const reflectedRef=useRef(null)
    useEffect(()=>{
        hoverRef.current.addEventListener('mouseover',()=>{
            reflectedRef.current.classList.add('hovered')
        })
    })
    useEffect(()=>{
        hoverRef.current.addEventListener('mouseout',()=>{
            reflectedRef.current.classList.remove('hovered')
        })
    })
  return (
    <section className='single-music-container' ref={hoverRef}>
        <article className='single-music-left-section'>
            <button className='right-play'><FaPlay onClick={()=>playhandler(id)} /></button>
            <div className='inner-right-play'>
                <h5 className='music-title'>{title}</h5>
                <p>{name}</p>
            </div>
        </article>
        <article className='single-music-right-section' >
            <div className='single-music-link' ref={reflectedRef}>
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
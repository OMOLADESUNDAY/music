import React, { useEffect, useRef} from 'react';
import './latestvideo.css'

const LastesVideos = ({videoClicked}) => {
  const singleVideoRef=useRef()
  const dvideo=  singleVideoRef.current
  useEffect(()=>{
    if (videoClicked.isPlaying) {
      dvideo.play()
    }
  },[videoClicked,dvideo])
   return (
    <section className='lastest-video-container'>
      <video src={videoClicked.src} ref={singleVideoRef} className='d-video' controls></video>
    </section>
    

  )
}

export default LastesVideos
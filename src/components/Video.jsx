
import React, { useRef, useState } from 'react'
import './video.css'
import { Col, Row } from 'react-bootstrap'
import LatestVideos from './LatestVideos'
import imgvid1  from '../images/1.jpg'
import imgvid2  from '../images/2.jpg'
import imgvid3  from '../images/3.jpg'
import imgvid4  from '../images/4.jpg'
import imgvid5  from '../images/5.jpg'
import imgvid6  from '../images/6.jpg'
const Video = () => {
 
  const videos = [
    { title: 'No fit vex', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' ,id:1, img:imgvid1,isPlaying:false},
    { title: 'Kilometre', src: ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',id:2, img:imgvid2,isPlaying:false },
    { title: 'isplenty', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',id:3, img:imgvid3,isPlaying:false},
    { title: 'No fit vex', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' ,id:4, img:imgvid4,isPlaying:false},
    { title: 'Kilometre', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',id:5, img:imgvid5,isPlaying:false},
    { title: 'isplenty', src:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4 ' ,id:6, img:imgvid6,isPlaying:false}
  ];
  const [videoClicked,setVideoClicked]=useState(videos[0])
      const videohandler=(id)=>{
        const currentVideo=videos.find((video)=>video.id === id)
        const newCurrentVideo = {...currentVideo,isPlaying:true}
        setVideoClicked(newCurrentVideo)
      }
      const videoDurationRef=useRef()
  return (
    <div className='video-contianer'>
         <h3>Our Videos</h3>
         <h1>newest albums & singles.</h1>
         <Row className='video-wrapper-inn'>
            <Col lg={8} >
              <LatestVideos videoClicked={videoClicked}/>
            </Col>
            <Col className='videolisting-col'>
              {videos.map((videodetails)=>{
                const {id,src,title}=videodetails
                return(
                  <div onClick={()=>videohandler(id)} key={id} className='videolist-container'>
                    <video src={src} type="video/mp4"  className='videolistimg' ref={videoDurationRef}>
                    <source  src={src} type="video/mp4"/>
                    </video>
                    <p>{title}</p>
                  </div>
                )
              })}
            </Col>

         </Row>
    </div>
  )
}

export default Video
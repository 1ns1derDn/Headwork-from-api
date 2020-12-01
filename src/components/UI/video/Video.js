import React from 'react'
import './Video.scss'
import video from './video.mp4'

const Video = (props) => {
  return (
    <div className="Video">
      <div className="Video-Inner">
        <video className="Video-Media" src={video} autoPlay muted loop></video>
        <div className="Video-Content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Video

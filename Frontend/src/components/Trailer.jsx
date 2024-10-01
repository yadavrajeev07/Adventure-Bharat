import React, { useRef, useState } from 'react';
import '../components/Trailer.css'
const Trailer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/Pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div >
      
        <video className='video' ref={videoRef} width="100%">
          <source src="/videos/Watch India in 4K _ One-Minute Cinematic Travel Video _ India Places to Visit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     
      <br />
      <button className='button' onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Trailer;

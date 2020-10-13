import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, share }) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // if video is playing
        // stop it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
        // if not playing then
        // play it
    }

    return (
        <div className='video'>

            <video
                onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
                src={url}
            />
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} share={share} />

            {/* video footer */}
            {/* video side bar */}
        </div>
    )
}

export default Video

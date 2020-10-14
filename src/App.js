import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';

function App() {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response;
    }
    fetchPosts();
  }, [])

  console.log(videos);

  return (
    // BEM naming convention
    <div className="app">
      <h1>Lets build a full stack MERN tiktok clone</h1>

      <div className='app__videos'>
        {videos.map(({ url, channel, description, song, likes, messages, share }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            share={share}
          />
        ))}
        {/*<Video
          url={"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}
          channel={'kanishk01011999'}
          description={'Yoo this works'}
          song={'99 problems but REACT aint one'}
          likes={111}
          messages={222}
          share={333}
        />*/}
      </div>

      {/* app container */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
    </div>
  );
}

export default App;

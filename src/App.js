import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Lets build a full stack MERN tiktok clone</h1>

      <div className='app__videos'>
        <Video
          url={"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}
          channel={'kanishk01011999'}
          description={'Yoo this works'}
          song={'99 problems but REACT aint one'}
          likes={111}
          messages={222}
          share={333}
        />
        <Video
          url={"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}
          channel={'kanishk01011999'}
          description={'Yoo this works'}
          song={'99 problems but REACT aint one'}
          likes={111}
          messages={222}
          share={333}
        />
        <Video
          url={"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}
          channel={'kanishk01011999'}
          description={'Yoo this works'}
          song={'99 problems but REACT aint one'}
          likes={111}
          messages={222}
          share={333}
        />
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

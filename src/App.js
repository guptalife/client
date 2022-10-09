import './App.css';
import React, { useEffect, useState } from 'react';
import { getLocalStream } from './webRtc';
import { getSocketConnections, joinCall } from './socketConnection';
import { useSelector } from 'react-redux';
import { selectLocalStream, selectRemoteStreams } from './store/streamSlice';
import { Outlet } from 'react-router-dom';
import Video from './Video';
function App() {
  const localStream = useSelector(selectLocalStream)
  const remoteStreams = useSelector(selectRemoteStreams);
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    getLocalStream();
    getSocketConnections();
  }, [])
  return (
    <div>
      {/*Navbar*/}
      {/* Show local Video with buttoons */}
      {/* join button */}
      {/* Room on join button */}
      <button>Login</button>
      <button>Register</button>
      {
        !joined &&
        <button onClick={() => joinCall(setJoined)}>Join Call</button>
      }
      <Video stream={localStream} />
      {
        remoteStreams.map(({ socketId, stream }, index) =>
          <div>
            <h3>{socketId}</h3>
            <Video key={index} stream={stream} />)
          </div>
        )
      }
    </div>
  )

}

export default App;

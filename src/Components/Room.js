import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
function Room() {
  const {roomId} = useParams();
  return (
    <div>
        <Navbar/>
        Room = {roomId}
    
    </div>
  )
}
export default Room
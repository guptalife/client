import React,{useRef,useEffect} from 'react'
function Video(props){
  const videoRef=React.useRef();
  React.useEffect(()=>{
        const video= videoRef.current;
        video.srcObject=props.stream;
  },[props.stream]);
  return (
     <div>
          <h1>  Hello </h1>
         <video ref={videoRef} autoPlay  />
     </div>
  )
}

export default Video;
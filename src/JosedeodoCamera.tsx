import {Video, useVideoConfig} from 'remotion';
import vert from '/home/daniel/Downloads/1hp.mp4'


export default function JosedeodoCamera() {

  const { durationInFrames } = useVideoConfig()

  console.log(durationInFrames)

	return(
    <div style={{
      width: 1080/2, 
      height: 460,
      marginTop: 1510, 
      display: 'block', 
      overflow: 'hidden'
    }} >
      <Video 
        src={vert} 
        volume={0} 
        style={{
          width: 3500,
          marginLeft: -560,
          marginTop: -1550, 
        }} />
      </div>
  )
};
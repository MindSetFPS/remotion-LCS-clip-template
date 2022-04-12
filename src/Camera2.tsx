import {Video} from 'remotion';
import vert from '/home/daniel/Downloads/1hp.mp4'

export default function Camera2() {
	return(
    <div style={{
      width: 1080, 
      height: 460,
      marginTop: 1510,
      marginLeft: 1080/2, 
      display: 'block', 
      overflow: 'hidden'
    }} >
      <Video 
        src={vert} 
        volume={0} 
        style={{
          width: 3500,
          marginLeft: -2400,
          marginTop: -1550, 
        }} />
      </div>
  )
};
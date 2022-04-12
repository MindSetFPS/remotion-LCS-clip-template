import {Video, Sequence} from 'remotion';
import vert from '/home/daniel/Videos/1hp.mp4'
import JosedeodoCamera from './JosedeodoCamera';
import Camera2 from './Camera2';

export default function Tiktok() {
	return (
		<>
			<Sequence from={0}  >
				<Video src={vert} />
			</Sequence>
			 
			<Sequence from={0}  >
				<JosedeodoCamera/>
			</Sequence>
			<Sequence from={0}  >
				<Camera2/>
			</Sequence>
			
		</>
		) 
};

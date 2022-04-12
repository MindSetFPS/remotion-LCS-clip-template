import {Composition} from 'remotion';
import Tiktok from './Tiktok'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={Tiktok}
				fps={60}
				height={1920}
				width={1080}
				durationInFrames={60 * 25}
			/>
		</>
	);
};

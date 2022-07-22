import { VerticalSpacer } from '../../Common/VerticalSpacer';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

import './styles.css';

export const Beginnings = () => {
	return (
		<div className="beginnings">
			<h1 className="start">
				<SportsScoreIcon fontSize="large" />
				START
				<SportsScoreIcon fontSize="large" />
			</h1>
			<figure>
				<img src="assets/images/eastern-europe.jpg" alt="The Eastern Bloc, circa 1982" width="500" />
				<legend>
					<img src="assets/images/sickle.svg" alt="" width="64" />
					<br />
					The Eastern Bloc, circa 1983
					<br />
					<br />
					(A pretty dark time known unironically as the Golden Age)
				</legend>
			</figure>

			<VerticalSpacer />

			<h1>"I'm going to be a pilot!"</h1>
			<figure>
				<img src="assets/images/bader.png" alt="Reach for the Sky" />
				<legend>Douglas Bader, His Life Story — Reach for the Sky (1954)</legend>
			</figure>

			<VerticalSpacer />

			<h1>Broken dreams... um, bones</h1>
			<figure>
				<img src="assets/images/fracture.webp" alt="Distal radius fracture" />
				<legend>Distal radius fracture in child (not mine)</legend>
			</figure>

			<VerticalSpacer length={5} />

			<h1>This bonesetter seems even cooler...</h1>
			<figure>
				<img src="assets/images/surgeon.jpg" alt="Surgeon" />
				<legend>Dramatic depiction of a surgeon</legend>
			</figure>

			<VerticalSpacer length={5} />

			<h1>... therefore I'm going to be a doctor.</h1>
			<p>(fallback on a garbageman career)</p>
		</div>
	);
};

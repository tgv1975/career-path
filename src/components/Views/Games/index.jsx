import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { VerticalSpacer } from '../../Common/VerticalSpacer';

import './styles.css';

export const Games = () => {
	return (
		<div className="games">
			<h1 className="start">
				<SportsEsportsIcon fontSize="large" />
				<br />
				8-BIT GAMES
			</h1>
			<figure>
				<img src="assets/images/jumping-jack.png" alt="Jumping Jack" width="500" />
				<legend>Jumping Jack (a ZX Spectrum game)</legend>
			</figure>

			<div className="old-computers">
				<div>
					<figure>
						<img src="assets/images/zx-spectrum.webp" alt="Sinclair ZX Spectrum" />
						<legend>The Sinclair ZX Spectrum</legend>
					</figure>
				</div>
				<div>
					<figure>
						<img src="assets/images/hc91.jpg" alt="I.C.E. Felix HC 91" />
						<legend>I.C.E. Felix HC 91</legend>
					</figure>
				</div>
			</div>
			{/* <div>
				<figure>
					<img src="assets/images/casette.jpg" alt="Computer casette" />
					<legend>Saving and loading data: a perilous journey</legend>
				</figure>
			</div> */}
		</div>
	);
};

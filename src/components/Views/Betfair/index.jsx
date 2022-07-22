import { VerticalSpacer } from '../../Common/VerticalSpacer';

import './styles.css';

export const Betfair = () => {
	return (
		<div className="betfair">
			<h1>2018</h1>
			<img src="assets/images/betfair.jpg" alt="Betfair Romania Development" />

			<VerticalSpacer />

			<figure>
				<img src="assets/images/tt.png" width="500" alt="Trading Tribe" />
				<legend>
					<b>Continuous Improvements</b>
					<div className="muscle">💪</div>
				</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/dublin.jpg" width="350" alt="Dublin" />
				<legend>Part of the Cluj chapter team hard at work (in Dublin)</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/mpm.png" alt="MPMF" />
				<legend>Manual Product Management</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/alium.png" alt="Alium" />
				<legend>Alium UI</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/dom.png" alt="The DOM Team" />
				<legend>All things UI and then some</legend>
			</figure>
		</div>
	);
};

import { VerticalSpacer } from '../../Common/VerticalSpacer';

import './styles.css';

export const BackToRoots = () => {
	return (
		<div className="roots">
			<h1>Career U-turn</h1>

			<figure>
				<img src="assets/images/sabbatical.jpg" alt="Take a break" />
				<legend>Start with a break</legend>
			</figure>

			<VerticalSpacer />

			<div className="companies">
				<figure>
					<p>
						<img src="assets/images/hipponet.jpg" alt="HiPPONET" />
					</p>
					<p>
						<img src="assets/images/blacktree.png" alt="BlackTree Software" />
					</p>
					<p>
						<img src="assets/images/betcore.jpg" alt="Betcore" />
					</p>
					<legend>2015: Going pro</legend>

					<ul>
						<li>Full-stack developer</li>
						<li>Countless software adventures</li>
						<li>
							Slow, but steady, shift towards a <b>UI specialization</b>
						</li>
					</ul>
				</figure>
			</div>
		</div>
	);
};

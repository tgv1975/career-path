import { VerticalSpacer } from '../../Common/VerticalSpacer';

import './styles.css';

export const Conclusion = () => {
	return (
		<div className="conclusion">
			<h1>30+ years of programming</h1>
			<img src="assets/images/plan.webp" alt="There is no map" />
			<VerticalSpacer length={4} />
			<div className="question">❓</div>
		</div>
	);
};

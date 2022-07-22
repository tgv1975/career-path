import { VerticalSpacer } from './../../Common/VerticalSpacer';

import './styles.css';

export const Doctoring = () => {
	return (
		<div className="doctoring">
			<h1>Took a brief 17-year break from CS to become a general surgeon</h1>

			<h2>Medical university—6 years</h2>
			<VerticalSpacer />
			<h2>Surgical residency—6 years</h2>
			<VerticalSpacer />
			<h2>Surgical practice ~ 5years</h2>
			<VerticalSpacer />
			<figure>
				<img src="assets/images/doc.jpg" alt="Somewhere in Birmingham"></img>
				<legend>Somewhere in Birmingham, 10 years ago</legend>
			</figure>
		</div>
	);
};

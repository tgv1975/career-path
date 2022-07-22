import { Button, Typography } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { NavLink } from 'react-router-dom';

import './styles.css';

export const Intro = () => {
	return (
		<div className="intro">
			<div className="header">
				<Typography variant="h1">
					<img src="assets/images/me.jpg" alt="" />
					<div>
						<div>
							CareerPath
							<sup>
								<small>TM</small>
							</sup>
						</div>
					</div>
				</Typography>
				<Typography className="subject">Tudor Găvan, Senior UI developer</Typography>
				<Typography variant="h3" className="rant">
					Totally volunteered for this, not at all because Rui made me.
				</Typography>
			</div>
			<div>
				<NavLink to="beginnings">
					<Button className="start-btn" variant="contained" color="primary" size="large">
						<DirectionsWalkIcon size="large" />
						<span>Start walking</span>
					</Button>
				</NavLink>
			</div>
		</div>
	);
};

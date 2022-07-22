import FavoriteIcon from '@mui/icons-material/Favorite';
import { VerticalSpacer } from '../../Common/VerticalSpacer';

import './styles.css';

export const Extramural = () => {
	return (
		<div className="extramural">
			<h1>Never stopped programming</h1>
			<p>Continued practice as a hobby.</p>
			<figure>
				<img src="assets/images/rickroll.gif" alt="Never Gonna Give You Up" />
				<legend>
					Never gonna give you up, coding! <FavoriteIcon color="error" />
				</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/win-xp.jpg" alt="Windows XP PC" />
				<legend>A pinnacle of technology</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<iframe
					width="800"
					height="450"
					src="https://www.youtube-nocookie.com/embed/tueNGW-wCuQ"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<legend>NeuroLab: simulating real-life neurons</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/poker.png" alt="Low Life Poker" />
				<legend>Low Life Poker: an honest machine poker app</legend>
			</figure>

			<VerticalSpacer />

			<figure>
				<img src="assets/images/web.jpg" alt="World Wide Web" />
				<legend>The dynamic Web revolution (early to mid-2000s)</legend>
				<ul>
					<li>A vertical search engine for PC parts + PC configurator &rarr; deployed @ computersales.ro &rarr; decommissioned</li>
					<li>WordPress-based colaborative blogging platform &rarr; deployed @ netarhia.ro / netarhia.com &rarr; decommissioned</li>
					<li>NOS: a custom file-based (no database) CMS &rarr; deployed @ spinstudio.ro</li>
					<li>etc.</li>
				</ul>
			</figure>
		</div>
	);
};

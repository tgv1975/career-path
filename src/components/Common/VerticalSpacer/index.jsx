import './styles.css';

export const VerticalSpacer = ({ length = 6, char = '' }) => {
	const markup = new Array(length).fill(null).map((el, index) =>
		index === Math.floor(length / 2) ? (
			<p key={index} className="char">
				{char}
			</p>
		) : (
			<p key={index}>&nbsp;</p>
		)
	);

	return <div className="vertical-spacer">{markup}</div>;
};

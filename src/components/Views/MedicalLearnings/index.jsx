import './styles.css';

export const MedicalLearnings = () => {
	return (
		<div className="medical-learnings">
			<h1>There were many learnings</h1>
			<div>
				<div>
					<figure>
						<img src="assets/images/ambulance.jpg" alt="Mission critical" />
						<legend>Meaning of "mission critical": life or death (literally)</legend>
					</figure>
				</div>

				<figure>
					<img src="assets/images/surgeons.jpg" alt="Surgical team" />
					<legend>Teamwork is unavoidable</legend>
				</figure>

				<figure>
					<img src="assets/images/specialization.jpg" alt="Specialization" />
					<legend>Specialization is essential</legend>
				</figure>

				<figure>
					<img src="assets/images/systems.jpg" alt="Systems thinking" />
					<legend>Holistic, systems thinking</legend>
				</figure>

				<figure>
					<img src="assets/images/diagnosis.jpg" alt="Systems thinking" />
					<legend>Structured approach to problems (diagnosis)</legend>
				</figure>

				<figure>
					<p>
						<img src="assets/images/cybernetics.jpg" alt="Thyroid regulation" />
					</p>
					<p>
						<img src="assets/images/cybernetic-loop.jpg" alt="Cybernetic loop" />
					</p>

					<pre className="pseudocode">{`LOOP
    WHILE quantity < threshold
        increase quantity

    IF quantity > threshold
        STOP
FOREVER`}</pre>

					<legend>It's cybernetics all the way down</legend>
				</figure>

				<figure>
					<img src="assets/images/prognosis.jpg" alt="Fortunetelling" />
					<legend>
						Ability to predict the future (prognosis)
						<p>
							DISCLAIMER: <i>most</i> of the time, with <i>some</i> accuracy, <i>limited</i> in scope, based on <i>a lot</i> of data.
						</p>
					</legend>
				</figure>
			</div>
		</div>
	);
};

import { VerticalSpacer } from '../../Common/VerticalSpacer';
import './styles.css';

export const Curriculum = () => {
	return (
		<div className="curriculum">
			<h1>Classical languages</h1>
			<p>Some dead and burried.</p>
			<div className="books">
				<img src="assets/images/assembler.jpg" alt="Assembler" />
				<img src="assets/images/dos.jpg" alt="MS DOS" />
				<img src="assets/images/pascal.jpg" alt="Turbo Pascal" />
				<img src="assets/images/cpp.jpg" alt="Turbo C++" />
				<img src="assets/images/dbase.jpg" alt="dBase" />
				<img src="assets/images/foxpro.webp" alt="FoxPro" />
			</div>

			<VerticalSpacer />

			<h1>"But I'm going to be a doctor!"</h1>
			<div className="extras">
				<figure>
					<img src="assets/images/cell.webp" alt="Human biology" />
					<legend>Human biology</legend>
				</figure>

				<figure>
					<img src="assets/images/molecule.jpg" alt="Organic chemistry" />
					<legend>Organic chemistry</legend>
				</figure>

				<figure>
					<img src="assets/images/physics.jpg" alt="Physics" />
					<legend>Physics</legend>
				</figure>
			</div>

			<VerticalSpacer />

			<div className="interlude">
				<figure>
					<img src="assets/images/hc91.jpg" alt="I.C.E. Felix HC 91" />
					<legend>Remember this one?</legend>
				</figure>
			</div>
		</div>
	);
};

import { useState } from 'react';
import { ModalDialog } from '../../Common/ModalDialog';
import { VerticalSpacer } from '../../Common/VerticalSpacer';

import './styles.css';

export const ComputerScience = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<>
			<div className="computer-science">
				<h1>
					Circa two tons of computer science: Felix C-
					<span className="clickable info" onClick={openModal}>
						256
					</span>
				</h1>
				<div className="felix">
					<div>
						<img src="assets/images/felix-c-256-1.jpg" alt="" />
					</div>
					<div>
						<img src="assets/images/felix-c-256-2.jpg" alt="" />
					</div>
				</div>

				<VerticalSpacer />

				<figure>
					<img src="assets/images/xt.jpg" alt="IBM PC XT" />
					<legend>IBM PC XT (128 KB RAM, 10 MB hard drive)</legend>
				</figure>
			</div>

			<ModalDialog open={modalOpen} handleClose={closeModal}>
				<h2>
					"256" means it had 256 KB<sup>*</sup> of RAM.
				</h2>
				<p>
					<sup>*</sup>
					<b>Kilobytes</b>. It's not a mistake.
				</p>
			</ModalDialog>
		</>
	);
};

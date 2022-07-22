import { Box, Modal } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '25vw',
	bgcolor: 'background.paper',
	border: 0,
	borderRadius: '5px',
	boxShadow: 24,
	p: 4,
};

export const ModalDialog = ({ open, handleClose, children }) => {
	return (
		<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box sx={style}>{children}</Box>
		</Modal>
	);
};

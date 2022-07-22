import { Paper } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import('./styles.css');

export const Workspace = ({ children }) => {
	const location = useLocation();
	const self = useRef();

	useEffect(() => {
		self.current.scrollTop = 0;
	}, [location]);

	return (
		<div className="workspace">
			<Paper ref={self}>{children}</Paper>
		</div>
	);
};

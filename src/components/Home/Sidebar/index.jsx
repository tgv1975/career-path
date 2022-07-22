import { NavLink, useLocation } from 'react-router-dom';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	Paper,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft';
import HikingIcon from '@mui/icons-material/Hiking';

import('./styles.css');

const linkActiveStyle = {
	background: '#eee',
};

export const Sidebar = () => {
	const location = useLocation();

	if (location.pathname === '/') return;

	return (
		<div className="sidebar">
			<Paper>
				<NavLink to="/">
					<div className="header">
						<Typography variant="h4">
							<img src="assets/images/me.jpg" alt="" />
							<div>
								<div>
									CareerPath
									<sup>
										<small>TM</small>
									</sup>
								</div>
								<div className="subtitle">Development MVP</div>
							</div>
						</Typography>
						<Typography className="subject">Tudor Găvan, Senior UI developer</Typography>
					</div>
				</NavLink>

				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
						<Typography>Ancient history</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="div">
							<nav aria-label="beginnings games">
								<List>
									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="beginnings"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<ChildCareIcon />
											</ListItemIcon>
											<ListItemText>An early decision</ListItemText>
										</ListItemButton>
									</ListItem>

									<ListItem disablePadding>
										<ListItemButton component={NavLink} to="games" style={({ isActive }) => (isActive ? linkActiveStyle : {})}>
											<ListItemIcon>
												<SportsEsportsIcon />
											</ListItemIcon>
											<ListItemText>Games — the gateway drug</ListItemText>
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
						<Typography>Computers arrive</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="div">
							<nav aria-label="computers">
								<List>
									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="computer-science"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<ComputerIcon />
											</ListItemIcon>
											<ListItemText>A heavy introduction to CS</ListItemText>
										</ListItemButton>
									</ListItem>

									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="curriculum"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<WbTwilightIcon />
											</ListItemIcon>
											<ListItemText>Early Computer Science</ListItemText>
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
						<Typography>Interlude</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="div">
							<nav aria-label="medicine">
								<List>
									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="doctoring"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<MedicalServicesIcon />
											</ListItemIcon>
											<ListItemText>A medical career</ListItemText>
										</ListItemButton>
									</ListItem>

									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="medical-learnings"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<LightbulbIcon />
											</ListItemIcon>
											<ListItemText>Lessons learned</ListItemText>
										</ListItemButton>
									</ListItem>

									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="extramural"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<WbTwilightIcon />
											</ListItemIcon>
											<ListItemText>Extramural activity</ListItemText>
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
						<Typography>Modern times</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="div">
							<nav aria-label="modern times">
								<List>
									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="back-to-roots"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<UTurnLeftIcon />
											</ListItemIcon>
											<ListItemText>Back to the future...</ListItemText>
										</ListItemButton>
									</ListItem>

									<ListItem disablePadding>
										<ListItemButton component={NavLink} to="betfair" style={({ isActive }) => (isActive ? linkActiveStyle : {})}>
											<ListItemIcon>🤗</ListItemIcon>
											<ListItemText>... and into the present</ListItemText>
										</ListItemButton>
									</ListItem>

									<ListItem disablePadding>
										<ListItemButton
											component={NavLink}
											to="conclusion"
											style={({ isActive }) => (isActive ? linkActiveStyle : {})}
										>
											<ListItemIcon>
												<HikingIcon />
											</ListItemIcon>
											<ListItemText>Where to next?</ListItemText>
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Paper>
		</div>
	);
};

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Intro } from '../Views/Intro';
import { Beginnings } from '../Views/Beginnings';
import { ComputerScience } from '../Views/ComputerScience';
import { Curriculum } from '../Views/Curriculum';
import { Games } from '../Views/Games';
import { Doctoring } from '../Views/Doctoring';
import { MedicalLearnings } from '../Views/MedicalLearnings';
import { Extramural } from '../Views/Extramural';
import { BackToRoots } from '../Views/BackToRoots';
import { Betfair } from '../Views/Betfair';
import { Conclusion } from '../Views/Conclusion';

import { Sidebar } from './Sidebar';
import { Workspace } from './Workspace';

import('./styles.css');

export const Home = () => {
	return (
		<div className="home">
			<BrowserRouter>
				<Sidebar />
				<Workspace>
					<Routes>
						<Route path="/" element={<Intro />}></Route>

						<Route path="/beginnings" element={<Beginnings />}></Route>

						<Route path="/games" element={<Games />}></Route>

						<Route path="/computer-science" element={<ComputerScience />}></Route>

						<Route path="/curriculum" element={<Curriculum />}></Route>

						<Route path="/doctoring" element={<Doctoring />}></Route>

						<Route path="/medical-learnings" element={<MedicalLearnings />}></Route>

						<Route path="/extramural" element={<Extramural />}></Route>

						<Route path="/back-to-roots" element={<BackToRoots />}></Route>

						<Route path="/betfair" element={<Betfair />}></Route>

						<Route path="/conclusion" element={<Conclusion />}></Route>
					</Routes>
				</Workspace>
			</BrowserRouter>
		</div>
	);
};

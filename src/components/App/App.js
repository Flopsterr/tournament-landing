import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import MainScreen from '../MainScreen/MainScreen';
import Teams from '../Teams/Teams';
import Live from '../Live/Live';
import Sidebar from '../Sidebar/Sidebar';
import Sheduler from '../Sheduler/Sheduler';

import '../../static/scss/style.scss';


const App = () => {

	return (
		<div className="App">
			<BrowserRouter>
				<Sidebar />
				<main className='main'>
					<Routes>
						<Route path='/tournament-landing' element={<MainScreen />} />
						<Route path='/tournament-landing/teams' element={<Teams />} />
						<Route path='/tournament-landing/live' element={<Live />} />
						<Route path='/tournament-landing/sheduler' element={<Sheduler />} />
					</Routes>
				</main>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;

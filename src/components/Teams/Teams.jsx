import React, { useState, useEffect } from 'react';

import './Teams.scss'
import Team from './Team/Team'
import logo from '../../static/logo.svg';


const Teams = () => {
	const [currentTeams, setCurrentTeams] = useState(0)

	useEffect(() => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
		}
		fetch('/api/teams/getTeams', requestOptions).then(res => res.json()).then(data => {
			setCurrentTeams(data.teams);
		});
	}, []);

	let html = 'На данный момент команды ещё не набраны!';

	if (currentTeams) {
		html = currentTeams.map(t => <Team key={t.team_id} img={logo} name={t.team_name} />);
	}

	return (
		<section className="teams outer">
			<div className="container">
				<h2 className="section__title">
					Команды
				</h2>
				<div className="teams__inner">
					{html}
				</div>
			</div>
		</section>
	)
}


export default Teams;

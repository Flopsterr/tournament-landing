import { HandySvg } from 'handy-svg';
import { NavLink } from 'react-router-dom';

import './MainNav.scss';


const MainNav = (props) => {
	let links = props.links.map(l =>
		<li onClick={() => {
			if (props.state) {
				props.setState(props.state);
			}

		}}>
			<NavLink className={l.class} to={l.to} end>
				<HandySvg src={l.icon__path} className='main-nav__icon' />
				<span className='hidden'>{l.text}</span>
			</NavLink>
		</li>
	);

	return (
		<div className="main-nav">
			{links}
			<div className="main-nav__seasons">
				<div className="main-nav__seasons-season">C</div>
				<NavLink className='sidebar__link hidden' to='/seasonI' end>СЕЗОН I</NavLink>
				<NavLink className='sidebar__link hidden' to='/seasonII' end>СЕЗОН II</NavLink>
			</div>
		</div>
	)
}

export default MainNav;
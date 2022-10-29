import { NavLink } from 'react-router-dom';

import './SecondaryNav.scss';


const SecondaryNav = (props) => {
	let links = props.links.map(l =>
		<li>
			<NavLink className={l.class} to={l.to} end>
				<span>{l.text}</span>
			</NavLink>
		</li>
	)
	return (
		<div className="secondary-nav hidden">
			<ul className="secondary-nav__list">
				{links}
			</ul>
		</div>
	)
}

export default SecondaryNav;
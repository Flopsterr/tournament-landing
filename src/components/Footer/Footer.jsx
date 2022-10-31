/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from '../../static/logo.svg';

import './Footer.scss'


const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<img src={Logo}></img>
				<div>
					<h1>Burning cup</h1>
					<p>Гори, сгорай до тла</p>
				</div>
			</div>
		</footer>
	)
}


export default Footer;

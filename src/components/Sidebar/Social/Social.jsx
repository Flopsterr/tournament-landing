import { HandySvg } from 'handy-svg';

import './Social.scss';

import telega from '../../../static/img/telega.svg';
import YouTube from '../../../static/img/youtube.svg';
import Discord from '../../../static/img/discord.svg';
import Vk from '../../../static/img/vk.svg';

const Social = () => {
	return (
		<div className="social hidden">
			<ul className="social__list">
				<li><a href='youtu.be'><HandySvg className="social__link" src={YouTube}/></a></li>
				<li><a href='discord.com'><HandySvg className="social__link" src={Discord}/></a></li>
				<li><a href='vk.com'><HandySvg className="social__link" src={Vk}/></a></li>
				<li><a href='t.me'><HandySvg className="social__link" src={telega}/></a></li>
			</ul>
		</div>
	)
}

export default Social;
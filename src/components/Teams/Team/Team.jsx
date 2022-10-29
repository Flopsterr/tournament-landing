import './Team.scss'


const Team = (props) => {
	return (
		<div className="team">
			<div className="team__img">
				<img src={props.img} alt="team logo" />
			</div>
			<div className="team__name">{props.name}</div>
		</div>
	)
}


export default Team;

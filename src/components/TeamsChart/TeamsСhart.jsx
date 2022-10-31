import React from "react";
import "./TeamsСhart.scss"

const TeamsСhart = (props) => {
    return (
        <div className="team-item">
            <img src={props.imgTeam} alt="" className="team-logo"></img>
            <p className="team-text">{props.text}</p>
        </div>
    )
}

export default TeamsСhart;
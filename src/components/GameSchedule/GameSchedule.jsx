/* eslint-disable jsx-a11y/alt-text */
import "./GameSchedule.scss";
import { HandySvg } from "handy-svg";
import Logo from "../../static/logo.svg";
import Dots from "../../static/img/decoration-circles.svg";
import Vs from "../../static/img/vs.svg";

const GameSchedule = ({
  logoRight,
  nameRight,
  date,
  game,
  logoLeft,
  nameLeft,
}) => {
  return (
    <div className="game-schedule__row">
      <div className="game-schedule__row__team">
        <img src={Logo}></img>
        <p>{nameLeft}</p>
      </div>
      <img src={Dots}></img>
      <div className="game-schedule__row__date">
        <h1>{date}</h1>
        <HandySvg src={Vs} width="64px" height="64px"/>
        <h2>{game}</h2>
      </div>
      <img src={Dots}></img>
      <div className="game-schedule__row__team">
        <img src={Logo}></img>
        <p>{nameRight}</p>
      </div>
    </div>
  );
};

export default GameSchedule;

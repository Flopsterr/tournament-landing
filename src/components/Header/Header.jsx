import React from "react";
import "./Header.scss";
import logo from "../../static/logo.svg";
import { HandySvg } from "handy-svg";

const Header = () => {
    return (
        <div className="header__container">
            <a className="logo" href="#first">
                <HandySvg className="logo__img" src={logo}/>
                <p className="logo__p">Burning cup</p>
            </a>
            <div className="links">
                <a href="#first" className="links__item">Главная</a>
                <a href="#teams" className="links__item">Команды</a>
                <a href="#live" className="links__item">Прямая трансляция</a>
                <a href="#faq" className="links__item">F.A.Q</a>
            </div>
        </div>
    )
}

export default Header;
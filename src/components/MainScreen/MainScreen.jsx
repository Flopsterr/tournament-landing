/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Faq from "../Faq/Faq";
import TeamsСhart from "../TeamsChart/TeamsСhart";
import "./MainScreen.scss";
import hero_text from "../../static/hero_text.svg";
import { HandySvg } from "handy-svg";
import logo from "../../static/logo.svg";
// import GameSchedule from "../GameSchedule/GameSchedule";
// import Ki from "../../static/img/KI.png";
// import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className="root">
      <section className="main-screen outer" id="first">
        <div className="container">
          <div className="main-screen__offer offer">
            <h1>
              Добро пожаловать на
              <HandySvg src={hero_text} className="main-hero__icon" />
            </h1>
            <h2>
              Платформа для проведения киберспортивных сезонных онлайн турниров.
              Среди учащихся колледжей и школ.
            </h2>
            {/* <div className="offer__actions">
              <button className="button button_primary">Принять участие</button>
              <button className="button button_border">Сезоны</button>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section>
        <div className="my__container  about-us__parent__container">
          <div className="about-us__container">
            <h1 className="heading__title">О нас</h1>
            <div>
              <img src={Ki} alt=""></img>
              <p>
                Мы инициативная группа студентов первого курса, которые
                заинтересованы в организации и проведении турниров по
                киберспортивным дисциплинам. Мы считаем, что киберспорт в
                настоящее время является одним из наиболее актуальных и
                популярных видов развлечений среди молодежи, и по этой причине,
                мы хотим провести турнир среди студентов СПК для того, чтобы они
                смогли продемонстрировать красивую и честную игру,
                продемонстрировать свои навыки командного взаимодействия и
                тактического мышления, а также просто для того, чтобы студенты
                весело провели время и смогли отдохнуть от учебного процесса.
                Проводя такое новое для СПК мероприятие, Мы также хотим наглядно
                продемонстрировать администрации колледжа, что подобные
                мероприятия имеют место быть даже в образовательных учреждениях
                и что они так же, как и остальные мероприятия проводимые на базе
                колледжа, могут сплачивать и собирать вместе студентов с общими
                интересами.
              </p>  
            </div>
          </div>
        </div>
      </section> */}
      <section id="live">
        <div className="my__container">
          <div className="live__container">
            <h1 className="heading__title">
              Прямая трансляция <span className="pulse"></span>
            </h1>
            <div className="live__stream">
              Трансляция в данный момент не доступна.
            </div>
          </div>
        </div>
      </section>
      <section id="teams">
        <div className="my__container">
          <div className="teams__container">
            <h1 className="heading__title">Команды</h1>
            <div className="teams__list">
              <TeamsСhart imgTeam={logo} text="Burning team"/>
              <TeamsСhart imgTeam={logo} text="Burning team"/>
              <TeamsСhart imgTeam={logo} text="Burning team"/>
              <TeamsСhart imgTeam={logo} text="Burning team"/>
              <TeamsСhart imgTeam={logo} text="Burning team"/>
            </div>
          </div>
        </div>
      </section>
      <section id="faq">
        <div className="my__container faq__main__container">
          <h1 className="heading__title heading__title__faq">F.A.Q.</h1>
          <div className="faq__container">
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="my__container game_schedule__container">
          <h1 className="heading__title heading__title__game-schedule">
            Расписание матчей
          </h1>
          <div className="game__schedules">
            <GameSchedule
              nameLeft={"Burning team"}
              date={"25.09.2022 15:00"}
              game={"Bo3"}
              nameRight={"Burning team"}
            />
            <GameSchedule
              nameLeft={"Burning team"}
              date={"25.09.2022 15:00"}
              game={"Bo3"}
              nameRight={"Burning team"}
            />
            <GameSchedule
              nameLeft={"Burning team"}
              date={"25.09.2022 15:00"}
              game={"Bo3"}
              nameRight={"Burning team"}
            />
            <GameSchedule
              nameLeft={"Burning team"}
              date={"25.09.2022 15:00"}
              game={"Bo3"}
              nameRight={"Burning team"}
            />
            <GameSchedule
              nameLeft={"Burning team"}
              date={"25.09.2022 15:00"}
              game={"Bo3"}
              nameRight={"Burning team"}
            />
            <GameSchedule
              nameLeft={"Burning team"}
              date={"25.09.2022 15:00"}
              game={"Bo3"}
              nameRight={"Burning team"}
            />
          </div>
          <Link className="game_schedule__container__button" to="/sheduler">
            Все матчи
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default MainScreen;

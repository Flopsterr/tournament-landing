import React from "react";
import "./Faq.scss";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Faq = ({ faq_a, faq_p }) => {
  function openTab(e) {
    const tab = e.currentTarget.parentNode,
      symbolState = tab.querySelector(".faq__a__div__a"),
      tabP = tab.querySelector(".faq__p");

    tabP.classList.toggle("none");

    if (symbolState.innerHTML === "+") {
      symbolState.innerHTML = "-";
    } else {
      symbolState.innerHTML = "+";
    }
  }

  return (
    <div className="faq">
      <a className="faq__a" onClick={(e) => openTab(e)}>
        <div className="faq__a__div">
          <p>{faq_a}</p>
          <a className="faq__a__div__a">+</a>
        </div>
      </a>
      <p className="faq__p none">{faq_p}</p>
    </div>
  );
};

export default Faq;

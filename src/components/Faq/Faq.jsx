import React, { useRef } from "react";
import "./Faq.scss";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Faq = ({ faq_a, faq_p }) => {
  const symbolState = useRef();
  const tabP = useRef();

  function openTab(e) {
    tabP.current.classList.toggle("none");
    if (symbolState.current.innerHTML === "+") {
      symbolState.current.innerHTML = "-";
    } else {
      symbolState.current.innerHTML = "+";
    }
  }
  function closeAll() {
    const tabPAll = document.querySelectorAll(".faq__p"),
      symbolStateAll = document.querySelectorAll(".faq__a__div__a");
    tabPAll.forEach((element) => {
        element.classList.add("none");
    });
    symbolStateAll.forEach((element) => {
      element.innerHTML = "+";
    });
  }

  return (
    <div className="faq">
      <a
        className="faq__a"
        onClick={(e) => {
          closeAll(e);
          openTab(e);
        }}
      >
        <div className="faq__a__div">
          <p>{faq_a}</p>
          <a ref={symbolState} className="faq__a__div__a">
            +
          </a>
        </div>
      </a>
      <p ref={tabP} className="faq__p none">
        {faq_p}
      </p>
    </div>
  );
};

export default Faq;

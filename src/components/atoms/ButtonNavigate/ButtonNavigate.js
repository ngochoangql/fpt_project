import React from "react";
import "./ButtonNavigate.scss";
function ButtonNavigate({ imgButton, content }) {
  return (
    <div>
      <div className="button_navigate__container">
        <img className="button_navigate__image" src={imgButton} />

        <p className="button_navigate__content">{content}</p>
      </div>
      <div className="button_navigate__hr"></div>
    </div>
  );
}

export default ButtonNavigate;

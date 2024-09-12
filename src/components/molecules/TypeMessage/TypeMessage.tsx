import React from "react";
import "./TypeMessage.scss";
import InputFIleManage from "../../atoms/InputFIleManage/InputFIleManage.tsx";
const TypeMessage = () => {
  return (
    <div className="type_message__container">
      <InputFIleManage />
      <img src="images/send.png" />
      <img src="images/emojis.png" />
      <img src="images/vector.png" />
    </div>
  );
}

export default TypeMessage;

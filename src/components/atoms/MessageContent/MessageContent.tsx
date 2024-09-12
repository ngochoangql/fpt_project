import React from "react";
import "./MessageContent.scss";
const MessageContent = ({ content, obj }) => {
  return (
    <div className={`message_content__container message_content__container--` + obj}>
      <div className={`message_content--` + obj}>
        <p className="message_content">{content}</p>
      </div>
    </div>
  );
}

export default MessageContent;

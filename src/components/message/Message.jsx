import React from "react";
import { confetyCustom } from "../../utils";
import "./index.scss";

const Message = ({ type }) => {
  if (type === "error") {
    return <div className="message error ">Sorry, that's not a match!</div>;
  } else if (type === "success") {
    return (
      <div className="message success">Congratulations, you found a match!</div>
    );
  } else if (type === "congrats") {
    return (
      <div className="message congrats animate__animated animate__fadeInUp">
        {confetyCustom()}
        <h1 className="">Congratulations!</h1>
        <p>You have matched all words.</p>
      </div>
    );
  } else {
    return null;
  }
};
export default Message;

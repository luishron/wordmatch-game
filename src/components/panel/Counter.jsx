import React from "react";
import { FaCheck, FaTimes, FaUndo } from "react-icons/fa";

const Counter = ({ matchedWords, errorCounter, resetMatchedWords }) => {
  return (
    <div className="counter">
      <div className="match-counter">
        <FaCheck size={24} />
        <span>
          Matches:
          <span> {matchedWords.length}</span>
        </span>
      </div>
      <div className="failed-counter">
        <FaTimes size={24} />
        <span>
          Failed:
          {errorCounter}
        </span>
      </div>
      <div className="reset" onClick={resetMatchedWords}>
        <FaUndo size={24} /> <span>Reset</span>
      </div>
    </div>
  );
};
export default Counter;

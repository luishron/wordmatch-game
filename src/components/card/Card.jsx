import React from "react";
import { isSelected } from "../../utils";

const Card = ({
  type,
  matchedWords,
  unmatchedWords,
  englishWords,
  spanishWords,
  selectedWords,
  onClick,
}) => {
  if (type === "english") {
    return (
      <div className={type}>
        {unmatchedWords.length === 0 &&
          "You have combined all the words in English"}
        {englishWords.map((word) => (
          <div
            key={word.id}
            className={`card ${
              isSelected(selectedWords, word, "english") ? "selected" : ""
            }`}
            onClick={() => onClick(word, "english")}
          >
            {word.english}
          </div>
        ))}
      </div>
    );
  } else if (type === "spanish") {
    return (
      <div className={type}>
        {unmatchedWords.length === 0 &&
          "You have combined all the words in Spanish"}
        {spanishWords.map((word) => (
          <div
            key={word.id}
            className={`card ${
              isSelected(selectedWords, word, "spanish") ? "selected" : ""
            }`}
            onClick={() => onClick(word, "spanish")}
          >
            {word.spanish}
          </div>
        ))}
      </div>
    );
  } else if (type === "matched") {
    return (
      <div className={type}>
        {matchedWords.length > 0
          ? matchedWords.map((word) => (
              <div className="card" key={`${word.id}-matched`}>
                {word.english}
              </div>
            ))
          : "No words match yet"}
      </div>
    );
  } else {
    return null;
  }
};
export default Card;

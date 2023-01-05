import React, { useCallback, useEffect, useState } from "react";
import { Card, CardGrid, Footer, Message, Navbar, Panel } from "./components/";

import { shuffle } from "./utils";
import { annaWords } from "./words";

const initialState = {
  spanishWords: [],
  englishWords: [],
  selectedWords: [],
  matchedWords: [],
  errorCounter: 0,
  showErrorMessage: false,
  originalWords: shuffle(annaWords),
};

const App = () => {
  const [matchedWords, setMatchedWords] = useState(initialState.matchedWords);
  const [unmatchedWords, setUnmatchedWords] = useState(
    initialState.originalWords
  );
  const [selectedWords, setSelectedWords] = useState(
    initialState.selectedWords
  );
  const [showErrorMessage, setShowErrorMessage] = useState(
    initialState.showErrorMessage
  );
  const [errorCounter, setErrorCounter] = useState(initialState.errorCounter);
  const [englishWords, setEnglishWords] = useState(initialState.originalWords);
  const [spanishWords, setSpanishWords] = useState(initialState.originalWords);

  const resetMatchedWords = useCallback(() => {
    setUnmatchedWords(initialState.originalWords);
    setSpanishWords(initialState.originalWords);
    setEnglishWords(initialState.originalWords);
    setSelectedWords(initialState.selectedWords);
    setMatchedWords(initialState.matchedWords);
    setErrorCounter(initialState.errorCounter);
    setShowErrorMessage(initialState.showErrorMessage);
  }, []);

  const handleClick = useCallback(
    (word, column) => {
      const selectedCard = { word, column };
      setSelectedWords([...selectedWords, selectedCard]);
    },
    [selectedWords]
  );

  const updateUnmatchedWords = useCallback(() => {
    setUnmatchedWords(
      shuffle(
        unmatchedWords.filter(
          (w) =>
            w !== selectedWords[0].word &&
            w !== selectedWords[selectedWords.length - 1].word
        )
      )
    );
    setSpanishWords(
      shuffle(
        spanishWords.filter(
          (w) =>
            w !== selectedWords[0].word &&
            w !== selectedWords[selectedWords.length - 1].word
        )
      )
    );
    setEnglishWords(
      shuffle(
        englishWords.filter(
          (w) =>
            w !== selectedWords[0].word &&
            w !== selectedWords[selectedWords.length - 1].word
        )
      )
    );
  }, [unmatchedWords, spanishWords, englishWords, selectedWords]);

  useEffect(() => {
    if (selectedWords.length === 2) {
      if (
        selectedWords[0].word.id === selectedWords[1].word.id &&
        selectedWords[0].column !== selectedWords[1].column
      ) {
        setMatchedWords([...matchedWords, selectedWords[0].word]);
        setShowErrorMessage(false);

        updateUnmatchedWords();
      } else if (
        selectedWords[0].word.id !== selectedWords[1].word.id ||
        selectedWords[0].column === selectedWords[1].column
      ) {
        setShowErrorMessage(true);

        setErrorCounter(errorCounter + 1);
        setSelectedWords([]);
      }

      setSelectedWords([]);
    }
  }, [selectedWords, errorCounter, matchedWords, updateUnmatchedWords]);

  return (
    <>
      <Navbar matchedWords={matchedWords} errorCounter={errorCounter} />

      <section className="app">
        <div className="container">
          {unmatchedWords.length === 0 ? <Message type="congrats" /> : null}
          <Panel
            matchedWords={matchedWords}
            errorCounter={errorCounter}
            resetMatchedWords={resetMatchedWords}
            showErrorMessage={showErrorMessage}
          />

          <CardGrid>
            <Card
              type="english"
              unmatchedWords={unmatchedWords}
              englishWords={englishWords}
              selectedWords={selectedWords}
              onClick={handleClick}
            />
            <Card
              type="spanish"
              unmatchedWords={unmatchedWords}
              spanishWords={spanishWords}
              selectedWords={selectedWords}
              onClick={handleClick}
            />
          </CardGrid>

          <Card type="matched" matchedWords={matchedWords} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;

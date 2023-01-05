import Message from "../message/Message";
import Counter from "./Counter";

import "./index.scss";

const Panel = ({
  matchedWords,
  errorCounter,
  resetMatchedWords,
  showErrorMessage,
}) => {
  return (
    <div className="panel">
      <div className="notifications">
        {showErrorMessage ? <Message type="error" /> : null}
      </div>
      <div className="controls">
        <Counter
          matchedWords={matchedWords}
          errorCounter={errorCounter}
          resetMatchedWords={resetMatchedWords}
        />
      </div>
    </div>
  );
};
export default Panel;

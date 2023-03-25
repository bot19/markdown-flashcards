import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";

export const QuizStart = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  return (
    <div
      style={{
        border: "5px solid mediumaquamarine",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>Quiz start</h1>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_START",
          })
        }
      >
        start
      </button>
    </div>
  );
};

/* <main>
  <h1>Software Engineering Flashcards</h1>
  <p>Some description</p>
  <Link to="/quiz">Start</Link>
</main> */

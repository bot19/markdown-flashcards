import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";

export const QuizStart = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  // TODO: state update for start

  return <div>start</div>;
};

/* <main>
      <h1>Software Engineering Flashcards</h1>
      <p>Some description</p>
      <Link to="/quiz">Start</Link>
    </main> */

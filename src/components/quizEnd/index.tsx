import React, { useEffect } from "react";
import { ReducerAction, ReducerState } from "../../state/Types";

export const QuizEnd = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  useEffect(() => {
    console.log("effect fired");
    dispatch({
      type: "UPDATE_QUIZ_SESSION_END",
    });
  }, []);

  return (
    <div
      style={{
        border: "5px solid orchid",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>Quiz start</h1>

      <div>Stats table (coming soon).</div>

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_START",
          })
        }
      >
        Back to start
      </button>
    </div>
  );
};

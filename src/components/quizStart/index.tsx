import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";

// colour: mediumaquamarine
export const QuizStart = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  return <div>quiz start</div>;
};

{
  /* <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_START",
          })
        }
      >
        start
      </button> */
}

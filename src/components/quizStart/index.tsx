import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import { Button } from "../button";
import { Stats } from "../stats";

// colour: mediumaquamarine
export const QuizStart = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  return (
    <div>
      <Stats state={state} className="mb-8" />

      <Button
        customText="Start"
        callback={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_START",
          })
        }
      />
    </div>
  );
};

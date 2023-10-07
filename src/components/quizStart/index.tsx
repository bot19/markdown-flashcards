import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import { Button } from "../button";
import { Stats } from "../stats";
import classNames from "classnames";

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
      <h2 className={classNames("font-bold mb-8", "text-2xl md:text-3xl")}>
        Start
      </h2>

      <Stats state={state} className="mb-8" />

      <Button
        customText={`Start quiz session ${state.currentSession.number}`}
        callback={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_START",
          })
        }
      />
    </div>
  );
};

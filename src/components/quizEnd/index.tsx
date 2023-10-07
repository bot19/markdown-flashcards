import React, { useEffect } from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import { Button } from "../button";
import { Stats } from "../stats";

// colour: orchid
export const QuizEnd = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  useEffect(() => {
    dispatch({
      type: "UPDATE_QUIZ_SESSION_END",
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Quiz end</h2>

      <Stats state={state} className="mb-8" />

      <Button
        customText="Back to start"
        theme="clear"
        callback={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_RESTART",
          })
        }
      />
    </div>
  );
};

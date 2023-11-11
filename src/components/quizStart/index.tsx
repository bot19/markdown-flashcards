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

      <Stats
        state={state}
        className="mb-8"
        box1={{
          title: "Quiz",
          values: [
            "quiz-number",
            "total-questions",
            "quiz-qs-remaining",
            "quiz-qs-correct",
            "quiz-qs-incorrect",
          ],
        }}
        box2={{
          title: "Session",
          values: ["session-number", "session-remaining", "session-questions"],
        }}
      />

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

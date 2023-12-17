import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import { Button } from "../button";
import { Stats } from "../stats";
import classNames from "classnames";

// sometimes Q changes in /questions isn't picked up; reload 1st to fix
const UPDATE_QUESTIONS_ALERT_TEXT =
  "If this doesn't show updated questions, reload the page first, then click this button again.";

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

      <Button
        customText={`Start quiz session ${state.currentSession.number}`}
        className="mb-8"
        callback={() =>
          dispatch({
            type: "UPDATE_QUIZ_SESSION_START",
          })
        }
      />

      <Stats
        state={state}
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
        customText="Update questions"
        className="mb-8"
        theme="clear"
        callback={() =>
          window.confirm(UPDATE_QUESTIONS_ALERT_TEXT)
            ? dispatch({
                type: "UPDATE_QUIZ_QUESTIONS_DATA",
              })
            : undefined
        }
      />
    </div>
  );
};

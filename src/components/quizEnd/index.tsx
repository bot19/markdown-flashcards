import React, { useEffect } from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import { Button } from "../button";
import { Stats } from "../stats";
import classNames from "classnames";

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
      <h2 className={classNames("font-bold mb-8", "text-2xl md:text-3xl")}>
        Quiz end
      </h2>

      <Stats
        state={state}
        box1={{
          title: "Quiz",
          values: ["quiz-number", "total-questions", "quiz-qs-remaining"],
        }}
        box2={{
          title: "Session",
          values: ["session-number", "session-remaining", "session-questions"],
        }}
        boxQuestionsStats={{
          correctAnswers: state.currentQuiz.correctAnswers,
          incorrectAnswers: state.currentQuiz.incorrectAnswers,
          allQuestions: state.currentQuiz.allQuestions,
        }}
      />

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

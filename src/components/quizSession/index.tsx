import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";

/**
 *
 * ...
 */
export const QuizSession = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  const quizSessionNo = state.currentSession.number;
  const slideQuestionData = state.currentSession.sessionQuestions.find(
    (qData) => qData.key === state.currrentQuestion.key
  )!;

  // TODO: hook up button questions.
  return (
    <div
      style={{
        border: "5px solid dodgerblue",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>{`Quiz session ${quizSessionNo}`}</h1>
      <h2>Q: {slideQuestionData.key}</h2>
      <div>
        <button
          style={{
            marginRight: "20px",
          }}
          onClick={() =>
            dispatch({
              type: "UPDATE_ANSWER_WRONG",
              value: slideQuestionData.key,
            })
          }
        >
          Incorrect
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "UPDATE_ANSWER_RIGHT",
              value: slideQuestionData.key,
            })
          }
        >
          Correct
        </button>
      </div>
    </div>
  );
};

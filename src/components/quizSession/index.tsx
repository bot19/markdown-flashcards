import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";

/**
 *
 *
 * Gatsby: example of Queries in building-block components
 * https://www.gatsbyjs.com/docs/tutorial/part-4/#queries-in-building-block-components
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
    (qData) => qData.name === state.currentAnswer.key
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
      <h2>Q: {slideQuestionData.name}</h2>
      <div>
        <button
          style={{
            marginRight: "20px",
          }}
          onClick={() =>
            dispatch({
              type: "UPDATE_QUIZ_SESSION_START",
            })
          }
        >
          Incorrect
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "UPDATE_QUIZ_SESSION_START",
            })
          }
        >
          Correct
        </button>
      </div>
    </div>
  );
};

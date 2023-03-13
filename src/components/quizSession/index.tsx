import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import { useStaticQuery, graphql } from "gatsby";

export const QuizSession = ({
  state,
  dispatch,
}: {
  state: ReducerState;
  dispatch: React.Dispatch<ReducerAction>;
}) => {
  // TODO: add Q name as variable
  const data = useStaticQuery(graphql`
    query CurrentQuestion {
      allFile(
        filter: {
          sourceInstanceName: { eq: "questions" }
          name: { eq: "css-css" }
        }
      ) {
        nodes {
          name
          id
        }
      }
    }
  `);

  console.log("Q data", data);

  // TODO: hook up button questions.
  return (
    <div
      style={{
        border: "5px solid dodgerblue",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>{`Quiz session ${state.currentQuiz.number}`}</h1>
      <h2>Q: {data?.allFile?.nodes?.[0].name}</h2>
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

import React from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import classNames from "classnames";
import { Button } from "../button";

const EXAMPLE_QUESTION =
  "This is where the question will go, they will be of varying lengths, which will affect the layout and its styling, cool?";

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
  const slideQuestionData = state.currentSession.sessionQuestions.find(
    (qData) => qData.key === state.currrentQuestion.key
  )!;

  // TODO: hook up button questions.
  return (
    <div className={classNames("flex flex-col", "", "h-full")}>
      <div className="pb-16">
        <h1 className="text-5xl font-bold text-gray-900 xl:text-6xl">
          {EXAMPLE_QUESTION}
        </h1>
        <span>[{slideQuestionData.key}]</span>
      </div>

      <div
        className={classNames(
          "grow",
          "flex justify-center items-center",
          "border-2 border-dashed border-gray-400 rounded-xl",
          "bg-gray-200"
        )}
      >
        <Button
          customText="Click to show answer"
          theme="clear"
          callback={() => {}}
        />
      </div>

      <div className={classNames("flex justify-center", "gap-4", "py-8")}>
        <Button
          customText="Incorrect"
          theme="clear"
          callback={() =>
            dispatch({
              type: "UPDATE_ANSWER_WRONG",
              value: slideQuestionData.key,
            })
          }
        />
        <Button
          customText="Correct"
          callback={() =>
            dispatch({
              type: "UPDATE_ANSWER_RIGHT",
              value: slideQuestionData.key,
            })
          }
        />
      </div>
    </div>
  );
};

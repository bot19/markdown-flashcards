import React, { useEffect, useState } from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import classNames from "classnames";
import { Button } from "../button";
// TODO: works, fix: https://stackoverflow.com/questions/61378768/how-to-make-module-css-works-with-typescript-in-a-gatsby-application
import * as styles from "./quizSession.module.css";

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
  const slideData = state.currentSession.sessionQuestions.find(
    (qData) => qData.key === state.currrentQuestion.key
  )!;

  console.log("Q data", slideData);

  // TODO: hook up button questions.
  return (
    <div className={classNames("flex flex-col grow")}>
      <div className="pb-16">
        <h1
          className={classNames(
            "font-bold text-gray-900",
            "text-3xl md:text-5xl xl:text-6xl"
          )}
        >
          {slideData.frontmatter.title}
        </h1>
        <span>[{slideData.key}]</span>
      </div>

      <Answer
        currentQuestion={state.general.quizStatus}
        answer={slideData.html}
      />

      <div className={classNames("flex justify-center", "gap-4", "py-8")}>
        <Button
          customText="Incorrect"
          theme="clear"
          callback={() =>
            dispatch({
              type: "UPDATE_ANSWER_WRONG",
              value: slideData.key,
            })
          }
        />
        <Button
          customText="Correct"
          callback={() =>
            dispatch({
              type: "UPDATE_ANSWER_RIGHT",
              value: slideData.key,
            })
          }
        />
      </div>
    </div>
  );
};

interface IAnswer {
  answer: string;
  currentQuestion: string | number;
}

const Answer = (props: IAnswer) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [props.currentQuestion]);

  return (
    <div
      className={classNames(
        "grow",
        "flex flex-col",
        { "items-center justify-center": !showAnswer },
        { "items-start justify-start": showAnswer },
        "border-2 border-dashed border-gray-400 rounded-xl",
        "bg-gray-200",
        "h-0 overflow-y-scroll"
      )}
    >
      {!showAnswer && (
        <Button
          customText="Click to show answer"
          theme="clear"
          callback={() => setShowAnswer(true)}
        />
      )}

      {showAnswer && (
        <div className={classNames("p-8")}>
          <div
            className={classNames(styles.answer, "text-xl")}
            dangerouslySetInnerHTML={{ __html: props.answer }}
          />
        </div>
      )}
    </div>
  );
};

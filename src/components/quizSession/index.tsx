import React, { useEffect, useState, Dispatch } from "react";
import hljs from "highlight.js";
import { ReducerAction, ReducerState } from "../../state/Types";
import classNames from "classnames";
import { Button } from "../button";
// TODO: works, fix: https://stackoverflow.com/questions/61378768/how-to-make-module-css-works-with-typescript-in-a-gatsby-application
// @ts-ignore
import * as styles from "./quizSession.module.css";

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

  const [showAnswer, setShowAnswer] = useState(false);

  /**
   * this hide/show state control and the setTimeout below
   * is to resolve the answer reveal flash from previous question
   * ie: q1, reveal answer, click correct, q2 flashes revealed answer
   * before state kicks in to hide it, inadvertently showing q2 answer
   * don't need setTimeout to resolve, but avoids instant flicker
   */
  const [showAnswerElement, setShowAnswerElement] = useState(true);
  useEffect(() => {
    setShowAnswerElement(true);
  }, [state.general.quizStatus]);

  return (
    <div className={classNames("flex flex-col grow")}>
      <div className="pb-8 md:pb-16">
        <h1
          className={classNames(
            "font-display font-semibold text-gray-900 tracking-tight",
            "text-3xl md:text-5xl",
            "!leading-[1.15]"
          )}
        >
          {slideData.frontmatter.title}
        </h1>
        <span className="text-gray-400">{slideData.key}</span>
      </div>

      <Answer
        currentQuestion={state.general.quizStatus}
        answer={slideData.html}
        showAnswerElement={showAnswerElement}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />

      <div
        className={classNames(
          "flex justify-center",
          "gap-4",
          "py-8",
          "relative z-1"
        )}
      >
        <Button
          customText="Incorrect"
          theme="clear"
          callback={() => {
            setShowAnswerElement(false);
            setTimeout(
              () =>
                dispatch({
                  type: "UPDATE_ANSWER_WRONG",
                  value: slideData.key,
                }),
              100
            );
          }}
          disabled={!showAnswer}
        />
        <Button
          customText="Correct"
          callback={() => {
            setShowAnswerElement(false);
            setTimeout(
              () =>
                dispatch({
                  type: "UPDATE_ANSWER_RIGHT",
                  value: slideData.key,
                }),
              100
            );
          }}
          disabled={!showAnswer}
        />
      </div>
    </div>
  );
};

interface IAnswer {
  answer: string;
  currentQuestion: string | number;
  showAnswerElement: boolean;
  showAnswer: boolean;
  setShowAnswer: Dispatch<boolean>;
}

const Answer = (props: IAnswer) => {
  // NOTE: meant to work in useEffect, but only works like this...
  hljs.highlightAll();

  useEffect(() => {
    hljs.highlightAll();
    props.setShowAnswer(false);
  }, [props.currentQuestion]);

  return (
    <div
      className={classNames(
        "grow",
        "flex flex-col",
        "items-center justify-center",
        { "!items-start !justify-start": props.showAnswer },
        "border-2 border-dashed border-gray-400 rounded-xl",
        "bg-gray-200",
        "h-0 overflow-y-scroll",
        "relative",
        { invisible: !props.showAnswerElement }
      )}
    >
      <Button
        customText="Click to show answer"
        theme="clear"
        callback={() => props.setShowAnswer(true)}
        className={classNames({ hidden: props.showAnswer })}
      />

      <div
        className={classNames(
          "p-4 md:p-8",
          "absolute inset-0 -z-10 invisible overflow-hidden",
          { "w-full !static !visible overflow-visible z-0": props.showAnswer }
        )}
      >
        <div
          className={classNames(styles.answer, "text-base md:text-xl")}
          dangerouslySetInnerHTML={{ __html: props.answer }}
        />
      </div>
    </div>
  );
};

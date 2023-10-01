import React from "react";
import classNames from "classnames";

interface IProgressBar {
  isInQuiz: boolean;
  quizStatus: string | number;
  sessionProgressLength: number;
}

export const ProgressBar = (props: IProgressBar) => {
  // in quiz props.quizStatus is a number (current Q #)
  const sessionProgress = props.isInQuiz
    ? Math.ceil(
        ((props.quizStatus as number) / props.sessionProgressLength) * 100
      )
    : 0;

  return (
    <div
      className={classNames(
        "absolute left-16 top-0",
        "w-[calc(100%-8rem)] h-4",
        "bg-blue-300",
        "transition-opacity duration-500",
        { "opacity-100": props.isInQuiz },
        {
          "opacity-0": !props.isInQuiz,
        }
      )}
    >
      <div
        className={classNames("bg-blue-500 h-full", "transition-all")}
        style={{
          width: `${sessionProgress > 100 ? 100 : sessionProgress}%`,
        }}
      />
    </div>
  );
};

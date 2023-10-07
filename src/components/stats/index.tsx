import React from "react";
import { ReducerState } from "../../state/Types";
import classNames from "classnames";

interface IStats {
  state: ReducerState;
  className?: string;
}

type StatRow = [string, number];

export const Stats = (props: IStats) => {
  const quizStats: StatRow[] = [
    ["number", props.state.currentQuiz.number],
    ["total questions", props.state.currentQuiz.allQuestions.length],
    ["questions remaining", props.state.currentQuiz.questionsRemaining.length],
    ["questions correct", props.state.currentQuiz.correctAnswers.length],
    ["questions incorrect", props.state.currentQuiz.incorrectAnswers.length],
  ];

  const sessionStats: StatRow[] = [
    ["number", props.state.currentSession.number],
    ["remaining", props.state.currentQuiz.sessionsRemaining],
    ["questions", props.state.currentSession.sessionQuestions.length],
  ];

  return (
    <div
      className={classNames(
        "text-gray-500",
        props.className,
        "md:flex md:gap-4",
        "md:w-[30rem]"
      )}
    >
      <div
        className={classNames(
          "max-w-[20rem] md:max-w-none md:grow",
          "mb-4 md:mb-0"
        )}
      >
        <div className="text-black">Quiz</div>

        {quizStats.map((row) => (
          <StatRow key={`quizStats_${row[0]}`} label={row[0]} value={row[1]} />
        ))}
      </div>

      <div className={classNames("max-w-[20rem] md:max-w-none md:grow")}>
        <div className="text-black">Session</div>

        {sessionStats.map((row) => (
          <StatRow
            key={`sessionStats_${row[0]}`}
            label={row[0]}
            value={row[1]}
          />
        ))}
      </div>
    </div>
  );
};

interface IStatRow {
  label: string;
  value: number;
}

const StatRow = (props: IStatRow) => {
  return (
    <div className="flex">
      <div className="flex-1">{props.label}</div>
      <div className="w-[3rem] text-black">{props.value}</div>
    </div>
  );
};

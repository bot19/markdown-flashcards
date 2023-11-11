import React from "react";
import { ReducerState } from "../../state/Types";
import classNames from "classnames";

type StatsBox = {
  title: string;
  values: string[];
};

interface IStats {
  state: ReducerState;
  className?: string;
  box1: StatsBox;
  box2?: StatsBox;
  boxQuestionsStats?: boolean;
}

type IQuizStat = {
  key: string;
  question: string;
  value: number;
  highlightCondition?: boolean;
  styleClasses?: string;
};

type IQuizStats = IQuizStat[];

export const Stats = (props: IStats) => {
  const quizStats: IQuizStats = [
    {
      key: "quiz-number",
      question: "number",
      value: props.state.currentQuiz.number,
    },
    {
      key: "total-questions",
      question: "total questions",
      value: props.state.currentQuiz.allQuestions.length,
    },
    {
      key: "quiz-qs-remaining",
      question: "questions remaining",
      value: props.state.currentQuiz.questionsRemaining.length,
    },
    {
      key: "quiz-qs-correct",
      question: "questions correct",
      value: props.state.currentQuiz.correctAnswers.length,
      highlightCondition: !!props.state.currentQuiz.correctAnswers.length,
      styleClasses: "text-green-500",
    },
    {
      key: "quiz-qs-incorrect",
      question: "questions incorrect",
      value: props.state.currentQuiz.incorrectAnswers.length,
      highlightCondition: !!props.state.currentQuiz.incorrectAnswers.length,
      styleClasses: "text-red-500",
    },
    {
      key: "session-number",
      question: "number",
      value: props.state.currentSession.number,
    },
    {
      key: "session-remaining",
      question: "remaining",
      value: props.state.currentQuiz.sessionsRemaining,
    },
    {
      key: "session-questions",
      question: "questions",
      value: props.state.currentSession.sessionQuestions.length,
    },
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
        <div className="text-black">{props.box1.title}</div>

        {props.box1.values.map((row) => {
          const stats = quizStats.find((stat) => stat.key === row)!;

          return <StatRow key={`quizStats_${stats.key}`} stats={stats} />;
        })}
      </div>

      {props.box2 && (
        <div className={classNames("max-w-[20rem] md:max-w-none md:grow")}>
          <div className="text-black">{props.box2.title}</div>

          {props.box2.values.map((row) => {
            const stats = quizStats.find((stat) => stat.key === row)!;

            return <StatRow key={`quizStats_${stats.key}`} stats={stats} />;
          })}
        </div>
      )}
    </div>
  );
};

interface IStatRow {
  stats: IQuizStat;
}

const StatRow = (props: IStatRow) => {
  const highlightClass =
    props.stats.highlightCondition && props.stats.styleClasses;

  return (
    <div className="flex">
      <div className="flex-1">{props.stats.question}</div>
      <div className={classNames("w-[3rem] text-black", highlightClass)}>
        {props.stats.value}
      </div>
    </div>
  );
};

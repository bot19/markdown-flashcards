import React from "react";
import { ReducerState } from "../../state/Types";
import classNames from "classnames";

type StatsBox = {
  title: string;
  values: string[];
};

type boxSessionQsStats = {
  correctAnswers: string[];
  incorrectAnswers: string[];
  allSessionQuestions: string[];
};

interface IStats {
  state: ReducerState;
  box1: StatsBox;
  box2?: StatsBox;
  boxSessionQsStats?: boxSessionQsStats;
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
    <>
      <div
        className={classNames(
          "text-gray-500",
          "md:flex md:gap-4",
          "md:w-[30rem]",
          "mb-8"
        )}
      >
        <div
          className={classNames(
            "max-w-[20rem] md:max-w-none md:basis-1/2",
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
          <div
            className={classNames("max-w-[20rem] md:max-w-none md:basis-1/2")}
          >
            <div className="text-black">{props.box2.title}</div>

            {props.box2.values.map((row) => {
              const stats = quizStats.find((stat) => stat.key === row)!;

              return <StatRow key={`quizStats_${stats.key}`} stats={stats} />;
            })}
          </div>
        )}
      </div>
      {props.boxSessionQsStats && (
        <BoxSessionQsStats boxSessionQsStats={props.boxSessionQsStats} />
      )}
    </>
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

interface IBoxSessionQsStats {
  boxSessionQsStats: boxSessionQsStats;
}

const BoxSessionQsStats = (props: IBoxSessionQsStats) => {
  return (
    <div
      className={classNames(
        "text-gray-500",
        "md:flex md:gap-4",
        "md:w-[30rem]",
        "mb-8"
      )}
    >
      <RenderQsStats
        classNames="mb-4 md:mb-0"
        sessionQuestions={props.boxSessionQsStats.correctAnswers}
        allSessionQsCount={props.boxSessionQsStats.allSessionQuestions.length}
        highlightClass="text-green-500"
        emoji="✅"
      />

      <RenderQsStats
        sessionQuestions={props.boxSessionQsStats.incorrectAnswers}
        allSessionQsCount={props.boxSessionQsStats.allSessionQuestions.length}
        highlightClass="text-red-500"
        emoji="❌"
      />
    </div>
  );
};

interface IRenderQsStats {
  classNames?: string;
  sessionQuestions: string[];
  allSessionQsCount: number;
  highlightClass: string;
  emoji: string;
}

const RenderQsStats = (props: IRenderQsStats) => {
  const sessionQsCount = props.sessionQuestions.length;
  const percentage = Math.round(
    (sessionQsCount / props.allSessionQsCount) * 100
  );
  const applyHighlight =
    sessionQsCount > 0 ? props.highlightClass : "text-black";

  return (
    <div
      className={classNames(
        "max-w-[20rem] md:max-w-none md:basis-1/2",
        "truncate",
        props.classNames
      )}
    >
      <div className="text-black">
        {props.emoji} Questions: {sessionQsCount}/{props.allSessionQsCount}{" "}
        {sessionQsCount > 0 && (
          <span className={classNames(applyHighlight)}>{percentage}%</span>
        )}
      </div>

      {sessionQsCount === 0 && "No questions"}

      {props.sessionQuestions.map((questionKey) => {
        return (
          <div className="truncate" key={`question_key_${questionKey}`}>
            {questionKey}
          </div>
        );
      })}
    </div>
  );
};

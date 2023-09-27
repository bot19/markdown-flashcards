import React from "react";
import { ReducerState } from "../../state/Types";
import classNames from "classnames";

interface IStats {
  state: ReducerState;
  className?: string;
}

export const Stats = (props: IStats) => {
  return (
    <div className={classNames("text-gray-500", props.className)}>
      <div className="c">
        <span>
          quiz number{" "}
          <span className="text-black">{props.state.currentQuiz.number}</span>
          <Spacer />
        </span>
        <span>
          session{" "}
          <span className="text-black">
            {props.state.currentSession.number}{" "}
          </span>
          <Spacer />
        </span>
        <span>
          sessions remaining{" "}
          <span className="text-black">
            {props.state.currentQuiz.sessionsRemaining}
          </span>
        </span>
      </div>

      <div className="c">
        <span>
          total questions{" "}
          <span className="text-black">
            {props.state.currentQuiz.allQuestions.length}
          </span>
          <Spacer />
        </span>
        <span>
          quiz questions remaining{" "}
          <span className="text-black">
            {props.state.currentQuiz.questionsRemaining.length}
          </span>{" "}
          <Spacer />
        </span>
        <span>
          session questions{" "}
          <span className="text-black">
            {props.state.currentSession.sessionQuestions.length}
          </span>
        </span>
      </div>

      <div className="c">
        <span>
          quiz questions correct{" "}
          <span className="text-black">
            {props.state.currentQuiz.correctAnswers.length}
          </span>{" "}
          <Spacer />
        </span>
        <span>
          quiz questions incorrect{" "}
          <span className="text-black">
            {props.state.currentQuiz.incorrectAnswers.length}
          </span>
        </span>
      </div>
    </div>
  );
};

const Spacer = () => <> / </>;

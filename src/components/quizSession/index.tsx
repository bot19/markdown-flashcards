import React, { useEffect, useState } from "react";
import { ReducerAction, ReducerState } from "../../state/Types";
import classNames from "classnames";
import { Button } from "../button";
// TODO: works, fix: https://stackoverflow.com/questions/61378768/how-to-make-module-css-works-with-typescript-in-a-gatsby-application
import * as answerStyles from "./quizSession.module.css";

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
    <div className={classNames("flex flex-col grow")}>
      <div className="pb-16">
        <h1 className="text-5xl font-bold text-gray-900 xl:text-6xl">
          {EXAMPLE_QUESTION}
        </h1>
        <span>[{slideQuestionData.key}]</span>
      </div>

      <Answer currentQuestion={state.general.quizStatus} />

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

interface IAnswer {
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
          {Math.random() > 0.5 ? <ShortAnswer /> : <LongAnswer />}
        </div>
      )}
    </div>
  );
};

const ShortAnswer = () => {
  return (
    <div className={answerStyles.answer}>
      <p>ptas qui quis est repellat ea esse eum.</p>
      <p>
        Commodi deleniti tenetur est accusantium. Dolore sed perspiciatis
        asperiores a. Consequatur repellat excepturi ab. Pariatur labore
        consequatur perferendis non voluptatem molestiae molestiae veniam.
        Asperiores aut consectetur aut facilis tempore quas in esse. Nihil
        consequuntur nostrum debitis molestiae consequuntur ut.
      </p>
    </div>
  );
};

const LongAnswer = () => {
  return (
    <div className={answerStyles.answer}>
      <p>ptas qui quis est repellat ea esse eum.</p>
      <p>
        Commodi deleniti tenetur est accusantium. Dolore sed perspiciatis
        asperiores a. Consequatur repellat excepturi ab. Pariatur labore
        consequatur perferendis non voluptatem molestiae molestiae veniam.
        Asperiores aut consectetur aut facilis tempore quas in esse. Nihil
        consequuntur nostrum debitis molestiae consequuntur ut.
      </p>
      <p>
        Voluptatibus ad alias inventore qui a adipisci rerum consequatur. Hic
        ullam qui doloremque sed repellendus id minima. Sed corrupti vitae et
        repellat expedita adipisci quam sit.
      </p>
      <p>
        Vitae non non sapiente ex est. Sunt sequi blanditiis asperiores qui.
        Veniam adipisci atque molestias et optio delectus placeat. Officia ut
        reprehenderit molestiae sunt est excepturi occaecati. Quam accusamus
        nemo eum voluptas veritatis quia laborum.
      </p>
      <p>
        Asperiores omnis ut quaerat maxime alias delectus velit est. Veniam eum
        ratione neque dolorem ea earum. Similique eveniet placeat aut aliquam
        veritatis velit eos qui. Iste suscipit officiis aliquid ipsa iure.
        Molestiae asperiores dolorem minus doloribus ullam adipisci sunt. Id
        saepe odit quisquam amet quaerat ullam.
      </p>
      <p>ptas qui quis est repellat ea esse eum.</p>
      <p>
        Commodi deleniti tenetur est accusantium. Dolore sed perspiciatis
        asperiores a. Consequatur repellat excepturi ab. Pariatur labore
        consequatur perferendis non voluptatem molestiae molestiae veniam.
        Asperiores aut consectetur aut facilis tempore quas in esse. Nihil
        consequuntur nostrum debitis molestiae consequuntur ut.
      </p>
      <p>
        Voluptatibus ad alias inventore qui a adipisci rerum consequatur. Hic
        ullam qui doloremque sed repellendus id minima. Sed corrupti vitae et
        repellat expedita adipisci quam sit.
      </p>
      <p>
        Vitae non non sapiente ex est. Sunt sequi blanditiis asperiores qui.
        Veniam adipisci atque molestias et optio delectus placeat. Officia ut
        reprehenderit molestiae sunt est excepturi occaecati. Quam accusamus
        nemo eum voluptas veritatis quia laborum.
      </p>
      <p>
        Asperiores omnis ut quaerat maxime alias delectus velit est. Veniam eum
        ratione neque dolorem ea earum. Similique eveniet placeat aut aliquam
        veritatis velit eos qui. Iste suscipit officiis aliquid ipsa iure.
        Molestiae asperiores dolorem minus doloribus ullam adipisci sunt. Id
        saepe odit quisquam amet quaerat ullam.
      </p>
    </div>
  );
};

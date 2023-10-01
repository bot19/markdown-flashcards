import * as React from "react";
import { ReducerState } from "../../state/Types";
import { APP_CONFIG } from "../../config";
import classNames from "classnames";

interface ILayout {
  children: React.ReactNode;
  state: ReducerState;
}

export const Layout = (props: ILayout) => {
  const isInQuiz = typeof props.state.general.quizStatus === "number";
  const sessionProgress = isInQuiz
    ? Math.ceil(
        ((props.state.general.quizStatus as number) /
          props.state.currentSession.sessionQuestions.length) *
          100
      )
    : 0;

  return (
    <div
      className={classNames(
        "h-screen",
        "relative",
        "before:absolute before:inset-x-0 before:top-0 before:w-full before:h-4 before:bg-gray-200"
      )}
    >
      <section
        className={classNames(
          "max-w-[1280px] h-full",
          "flex flex-col",
          "mx-auto",
          "drop-shadow-xl",
          "relative",
          "after:absolute after:inset-y-0 after:-left-[50vw] after:w-[50vw] after:bg-white after:z-10"
        )}
      >
        <div className={classNames("flex flex-row flex-1", "relative")}>
          <div
            className={classNames(
              "absolute inset-y-0 z-10",
              "bg-white drop-shadow-2xl",
              "rounded-r-3xl",
              "w-10/12",
              "transition-all duration-500",
              { "left-0": !isInQuiz },
              {
                "-left-[75%]": isInQuiz,
              }
            )}
          >
            <div
              className={classNames(
                "flex flex-col h-full",
                "p-16 pb-0",
                "transition-all duration-500",
                { "opacity-100": !isInQuiz },
                {
                  "opacity-0": isInQuiz,
                }
              )}
            >
              <Header />
              <div
                className={classNames("grow", {
                  hidden: isInQuiz,
                })}
              >
                {props.children}
              </div>
              <Footer />
            </div>
          </div>

          <div className={classNames("w-full")}>
            <div
              className={classNames(
                "flex flex-col h-full",
                "max-w-[1024px] mx-auto",
                "p-16",
                "relative",
                "transition-opacity duration-500",
                { "opacity-100": isInQuiz },
                {
                  "opacity-0": !isInQuiz,
                }
              )}
            >
              <div
                className={classNames(
                  "absolute left-16 top-0",
                  "w-[calc(100%-8rem)] h-4",
                  "bg-blue-300",
                  "transition-opacity duration-500",
                  { "opacity-100": isInQuiz },
                  {
                    "opacity-0": !isInQuiz,
                  }
                )}
              >
                <div
                  className={classNames("bg-blue-500 h-full")}
                  style={{
                    width: `${sessionProgress > 100 ? 100 : sessionProgress}%`,
                  }}
                />
              </div>

              {props.children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Header = () => (
  <div className={classNames("pb-8 mb-8", "border-b border-b-gray-200")}>
    <div className="tracking-tight mb-8">
      <p className="mb-2 font-medium text-gray-400">
        <span className="uppercase">{APP_CONFIG.quizInfo.author}</span> presents
      </p>
      <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
        {APP_CONFIG.quizInfo.name}
      </h2>
    </div>

    <p className="text-2xl text-gray-700">{APP_CONFIG.quizInfo.description}</p>
  </div>
);

const Footer = () => (
  <footer className={classNames("flex items-center", "h-16")}>
    <p className="text-gray-400">
      Made in 2023 with ♥ / Checkout on{" "}
      <a
        href="https://github.com/bot19/software-eng-flashcards"
        target="_blank"
        className={classNames("text-black underline", "hover:no-underline")}
      >
        Github
      </a>
      .
    </p>
  </footer>
);

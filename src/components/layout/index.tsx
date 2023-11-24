import * as React from "react";
import { ReducerState } from "../../state/Types";
import { APP_CONFIG } from "../../config";
import classNames from "classnames";
import { ProgressBar } from "../progressBar";

interface ILayout {
  children: React.ReactNode;
  state: ReducerState;
}

export const Layout = (props: ILayout) => {
  const isInQuiz = typeof props.state.general.quizStatus === "number";

  return (
    <div
      className={classNames(
        "flex h-screen",
        "relative",
        "before:absolute before:inset-x-0 before:top-0 before:w-full before:h-4 before:bg-gray-200"
      )}
    >
      <section
        className={classNames(
          "max-w-[1280px]",
          "flex flex-col grow",
          "mx-auto",
          "drop-shadow-xl",
          "relative",
          "after:absolute after:inset-y-0 after:-left-[50vw] after:w-[50vw] after:bg-white after:z-10"
        )}
      >
        <div className={classNames("flex flex-col grow", "relative")}>
          <div
            className={classNames(
              "absolute inset-y-0 z-10",
              "bg-white drop-shadow-2xl",
              "rounded-r-3xl",
              "w-full md:w-11/12 lg:w-10/12",
              "transition-all duration-500",
              { "left-0": !isInQuiz },
              {
                "-left-full md:-left-[88%] lg:-left-[80%] xl:-left-[75%]":
                  isInQuiz,
              }
            )}
          >
            <div
              className={classNames(
                "h-full",
                "p-6 md:p-10 xl:p-16 !pb-0",
                "transition-all duration-500",
                { "opacity-100": !isInQuiz },
                {
                  "opacity-0": isInQuiz,
                }
              )}
            >
              <div
                className={classNames(
                  "grid grid-cols-1",
                  "grid-rows-[min-content_1fr_min-content]",
                  "h-full"
                )}
              >
                <Header />

                <div className="overflow-y-auto">
                  {!isInQuiz && props.children}
                </div>

                <Footer />
              </div>
            </div>
          </div>

          <div className={classNames("w-screen", "flex flex-col grow")}>
            <div
              className={classNames(
                "flex flex-col grow",
                "w-full max-w-[1024px] mx-auto",
                "px-4 pt-8 md:p-16 !pb-0",
                "relative",
                "transition-opacity duration-500",
                { "opacity-100": isInQuiz },
                {
                  "opacity-0": !isInQuiz,
                }
              )}
            >
              <ProgressBar
                isInQuiz={isInQuiz}
                quizStatus={props.state.general.quizStatus}
                sessionProgressLength={
                  props.state.currentSession.sessionQuestions.length
                }
              />

              {isInQuiz && props.children}
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

      <h1
        className={classNames(
          "font-bold text-gray-900",
          "text-3xl md:text-5xl xl:text-6xl"
        )}
      >
        {APP_CONFIG.quizInfo.name}
      </h1>
    </div>

    <p className={classNames("text-gray-700", "text-xl md:text-2xl")}>
      {APP_CONFIG.quizInfo.description}
    </p>
  </div>
);

const Footer = () => (
  <footer className={classNames("flex items-center", "h-16")}>
    <p className="text-gray-400">
      Made in {APP_CONFIG.quizInfo.year} with ♥ / Checkout on{" "}
      <a
        href={APP_CONFIG.quizInfo.link}
        target="_blank"
        className={classNames("text-black underline", "hover:no-underline")}
      >
        {APP_CONFIG.quizInfo.linkText}
      </a>
      .
    </p>
  </footer>
);

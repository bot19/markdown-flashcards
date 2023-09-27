import * as React from "react";
import { ReducerState } from "../../state/Types";
import { APP_CONFIG } from "../../config";
import classNames from "classnames";

interface ILayout {
  children: React.ReactNode;
  state: ReducerState;
}

export const Layout = (props: ILayout) => {
  return (
    <section
      className={classNames(
        "max-w-[1280px] h-screen",
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
            "absolute inset-y-0 left-0 z-10",
            "w-10/12",
            "rounded-r-3xl",
            "bg-white drop-shadow-2xl"
          )}
        >
          <div className="flex flex-col h-full p-16">
            <div
              className={classNames("pb-8 mb-8", "border-b border-b-gray-200")}
            >
              <div className="tracking-tight mb-8">
                <p className="mb-2 font-medium text-gray-400">
                  <span className="uppercase">
                    {APP_CONFIG.quizInfo.author}
                  </span>{" "}
                  presents
                </p>
                <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                  {APP_CONFIG.quizInfo.name}
                </h2>
              </div>

              <p className="text-2xl text-gray-700">
                {APP_CONFIG.quizInfo.description}
              </p>
            </div>

            <div className="">{props.children}</div>
          </div>
        </div>

        <div className={classNames("w-full")}>
          <div
            className={classNames(
              "flex flex-col h-full",
              "p-16",
              "transition-opacity duration-1000 opacity-0"
            )}
          >
            content...
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import classNames from "classnames";

const SIZE = Object.freeze({
  md: "px-5 py-4 text-lg rounded-lg",
  lg: "",
});

const THEME = Object.freeze({
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  clear: "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300",
});

// font-bold

// inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease

interface IButton {
  target?: "_blank" | "_self";
  customText: string | null;
}

export interface IButtonLink extends IButton {
  url: string | null;
}

export interface IButtonComponent extends IButton {
  className?: string;
  callback?: () => void | undefined; // TODO: later
  size?: "md" | "lg";
  theme?: "primary" | "success" | "clear";
  url?: string;
}

const BUTTON_DEFAULT_PROPS = Object.freeze({
  size: "md",
  theme: "primary",
});

/**
 * button component
 *
 * either opens link or executates some functionality (ie: open modal)
 */
export const Button = (props: IButtonComponent) => {
  // target "_self" comes through craft as "", need to accommodate
  const target = props.target?.length ? props.target : "_self";

  return (
    <button
      className={classNames(
        "inline-block",
        "min-w-[8rem] md:min-w-[10rem]",
        "font-display font-medium tracking-tight text-center",
        "transition duration-200 ease",
        "focus:outline-none",
        // use non-null assertion operator to shut TS up, despite defaultProps...
        SIZE[props.size!],
        THEME[props.theme!],
        props.className
      )}
      onClick={() => {
        if (props.url) return window.open(props.url, target);
        if (props.callback) return props.callback();
      }}
    >
      {props.customText}
    </button>
  );
};

Button.defaultProps = { ...BUTTON_DEFAULT_PROPS };

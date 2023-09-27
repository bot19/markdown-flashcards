import React from "react";
import classNames from "classnames";

const SIZE = Object.freeze({
  md: "px-5 py-4 text-lg rounded-lg",
  lg: "",
});

const THEME = Object.freeze({
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  clear: "",
});

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
        "inline-block min-w-[10rem]",
        "font-medium text-center",
        "transition duration-200 ease",
        "focus:outline-none",
        SIZE[props.size],
        THEME[props.theme],
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

/*
  
 <a
    href="#_"
    className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
    data-rounded="rounded-lg"
  >
    Sign up with Google
  </a>

<a
  href="#_"
  className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
  data-primary="blue-600"
  data-rounded="rounded-lg"
>
  Get Started Today
</a>

*/

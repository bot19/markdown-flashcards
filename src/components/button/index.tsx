import React from "react";
import classNames from "classnames";

const SIZE = Object.freeze({
  md: "px-[clamp(0.75rem,0.3333rem+1.8519vw,2rem)] pt-2 pb-1 sm:pt-3 sm:pb-2 text-2xl-dynamic",
  lg: "px-[clamp(1rem,0.3333rem+2.9630vw,3rem)] pt-4 pb-2 sm:pt-6 sm:pb-4 text-xl-dynamic font-aesop uppercase",
});

const THEME = Object.freeze({
  blue: "bg-cc-blue-700 text-white",
  purple: "bg-cc-purple-400 text-white",
  red: "bg-cc-pink-800 text-cc-yellow-400",
  white: "bg-cc-pink-200 text-cc-purple-400",
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
  theme?: "blue" | "purple" | "red" | "white";
  url?: string;
}

const BUTTON_DEFAULT_PROPS = Object.freeze({
  size: "md",
  theme: "blue",
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
        "rounded-full focus:outline-none hover:animate-bounce-sm",
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
  
  <div className="relative">
  <a
    href="#_"
    className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
    data-primary="blue-600"
    data-rounded="rounded-lg"
  >
    Create Account
  </a>
  <a
    href="#_"
    className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
    data-rounded="rounded-lg"
  >
    Sign up with Google
  </a>
</div>

<a
  href="#_"
  className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
  data-primary="blue-600"
  data-rounded="rounded-lg"
>
  Get Started Today
</a>

*/

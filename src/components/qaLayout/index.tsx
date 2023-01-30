import * as React from "react";
import { Link } from "gatsby";

// TODO: useStaticQuery to get question

export const QaLayout = () => {
  return (
    <>
      <h1>Question</h1>
      <p>Key answer</p>
      <p>Extra details</p>
      <button>Wrong</button>
      <button>Correct</button>
    </>
  );
};

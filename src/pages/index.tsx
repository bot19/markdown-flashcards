import * as React from "react";
import { useReducer } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import "../css/styles.scss";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";

const IndexPage: React.FC<PageProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <h1>Software Engineering Flashcards</h1>
      <p>Some description</p>
      <Link to="/quiz">Start</Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Quiz Start</title>
    <meta name="description" content="Your description" />
  </>
);

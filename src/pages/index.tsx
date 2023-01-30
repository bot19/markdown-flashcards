import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import "../css/styles.scss";

const IndexPage: React.FC<PageProps> = () => {
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

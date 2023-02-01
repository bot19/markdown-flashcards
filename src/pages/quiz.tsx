import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import "../css/styles.scss";

/**
 * TODO:
 * - get list of questions
 * - process & put Q list in array
 * - give it to Q layout with question ID
 * - Q layout to get question content & display
 */

const QuizQuestionsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main>
      <h1>Questions section</h1>
      <p>Some description</p>
      <Link to="/end">Next</Link>
    </main>
  );
};

export default QuizQuestionsPage;

export const Head: HeadFC = () => (
  <>
    <title>Quiz Questions</title>
    <meta name="description" content="Your description" />
  </>
);

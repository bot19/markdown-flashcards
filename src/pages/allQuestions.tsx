import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
// import "../css/styles.scss";

/**
 *
 */
const AllQuestionsPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main>
      <h1>Questions section</h1>
      <p>Some description</p>
      <Link to="/end">Next</Link>
    </main>
  );
};

export default AllQuestionsPage;

export const Head: HeadFC = () => (
  <>
    <title>Quiz Questions</title>
    <meta name="description" content="Your description" />
  </>
);

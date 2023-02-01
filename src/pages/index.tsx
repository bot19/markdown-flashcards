import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import "../css/styles.scss";
import { useStateStart } from "../state/useStateStart";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const state = useStateStart(data);

  console.log("questions data", data, state);

  return (
    <main>
      <h1>Software Engineering Flashcards</h1>
      <p>Some description</p>
      <Link to="/quiz">Start</Link>
    </main>
  );
};

export default IndexPage;

// TODO: copy-pasta from tutorial, but why gatsby does this vs useStaticQuery?
export const query = graphql`
  query AllQuestions {
    allFile(filter: { sourceInstanceName: { eq: "questions" } }) {
      nodes {
        name
        id
      }
      pageInfo {
        totalCount
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <title>Quiz Start</title>
    <meta name="description" content="Your description" />
  </>
);

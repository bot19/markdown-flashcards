import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import "../css/styles.scss";
import { useStateInit } from "../state/useStateInit";
import { QuizStart } from "../components/quizStart";
import { QuizSession } from "../components/quizSession";
import { QuizEnd } from "../components/quizEnd";

const QuizPage: React.FC<PageProps> = ({ data }) => {
  const { state, dispatch } = useStateInit(data);

  console.log("questions data", data, state);

  if (state.general.quizStatus === "START")
    return <QuizStart {...{ state, dispatch }} />;

  if (state.general.quizStatus === "END")
    return <QuizEnd {...{ state, dispatch }} />;

  return <QuizSession {...{ state, dispatch }} />;
};

export default QuizPage;

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

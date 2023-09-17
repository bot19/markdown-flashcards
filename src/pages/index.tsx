import React, { useEffect } from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { useStateInit } from "../state/useStateInit";
import { QuizStart } from "../components/quizStart";
import { QuizSession } from "../components/quizSession";
import { QuizEnd } from "../components/quizEnd";
import { setLocalStorage } from "../helpers";
import { AllQuestions } from "../Types";
import { KEYS_LOCAL_STORAGE } from "../constants";
// import "../css/styles.css";

const QuizPage = ({ data }: { data: AllQuestions }) => {
  const { state, dispatch } = useStateInit(data);

  // persist Q .md data for access at diff app stages
  setLocalStorage(KEYS_LOCAL_STORAGE.ALL_QS_DATA, data?.allFile?.nodes || []);

  // update localStorage on state change
  useEffect(() => {
    console.log("effect: state", state);
    setLocalStorage(KEYS_LOCAL_STORAGE.APP_STATE, state || {});
  }, [state]);

  // flow: (1) start quiz
  if (state.general.quizStatus === "START")
    return <QuizStart {...{ state, dispatch }} />;

  // flow: (3) finished quiz
  if (state.general.quizStatus === "END")
    return <QuizEnd {...{ state, dispatch }} />;

  // flow: (2) quiz session
  return <QuizSession {...{ state, dispatch }} />;
};

export default QuizPage;

// TODO: Type this at some point
// Gatsby: Queries in page components
// https://www.gatsbyjs.com/docs/tutorial/part-4/#queries-in-page-components-create-a-blog-page-with-a-list-of-post-filenames
export const query = graphql`
  query AllQuestions {
    allFile(filter: { sourceInstanceName: { eq: "questions" } }) {
      nodes {
        key: name
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

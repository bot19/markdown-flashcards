import React, { useEffect } from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { useStateInit } from "../state/useStateInit";
import { Layout, QuizEnd, QuizSession, QuizStart } from "../components";
import { setLocalStorage } from "../helpers";
import { AllQuestions } from "../Types";
import { KEYS_LOCAL_STORAGE } from "../constants";
import { APP_CONFIG } from "../config";

interface IQuizPage {
  data: AllQuestions;
}

const QuizPage = (props: IQuizPage) => {
  const { state, dispatch } = useStateInit(props.data);

  // persist Q .md data for access at diff app stages
  setLocalStorage(
    KEYS_LOCAL_STORAGE.ALL_QS_DATA,
    props.data?.questionsData?.nodes || []
  );

  // update localStorage on state change
  useEffect(() => {
    console.log("effect: state", state);
    setLocalStorage(KEYS_LOCAL_STORAGE.APP_STATE, state || {});
  }, [state]);

  // flow: (2) quiz session
  let content = <QuizSession {...{ state, dispatch }} />;

  // flow: (1) start quiz
  if (state.general.quizStatus === "START")
    content = <QuizStart {...{ state, dispatch }} />;

  // flow: (3) finished quiz
  if (state.general.quizStatus === "END")
    content = <QuizEnd {...{ state, dispatch }} />;

  return <Layout state={state}>{content}</Layout>;
};

export default QuizPage;

// TODO: Type this at some point
// Gatsby: Queries in page components
// https://www.gatsbyjs.com/docs/tutorial/part-4/#queries-in-page-components-create-a-blog-page-with-a-list-of-post-filenames
export const query = graphql`
  query AllQuestions {
    questionsData: allMarkdownRemark {
      nodes {
        frontmatter {
          category
          created
          links
          modified
          tags
          title
        }
        html
      }
      pageInfo {
        totalCount
      }
    }
  }
`;

export const Head: HeadFC = () => {
  // console.log("head", props);

  return (
    <>
      <title>
        {APP_CONFIG.quizInfo.name} by {APP_CONFIG.quizInfo.author}
      </title>
      <meta name="description" content={APP_CONFIG.quizInfo.description} />
    </>
  );
};

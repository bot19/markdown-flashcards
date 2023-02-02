import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import "../css/styles.scss";

/**
 *
 */
const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Quiz end page</h1>
      <p>Some description</p>
      <Link to="/">Restart</Link>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <title>Quiz End</title>
    <meta name="description" content="Your description" />
  </>
);

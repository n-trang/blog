import * as React from "react";
import { graphql, Link, withAssetPrefix } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Footer = {
  bottom: "0",
  width: "100%",
};
const Project = ({ data, children }) => {
  return (
    <Layout>
      <center>
        <h1>{data.mdx.frontmatter.title} </h1>
        <code>Tools & technologies: {data.mdx.frontmatter.techstack}</code>
      </center>
      <hr></hr>
      {/* <h2>Try it out</h2>
      <button>tpwk</button>, see the{" "}
      <code>
        <a href="">raw code</a>
      </code>
      , or install via npm <code>npm install tpwk</code>. */}
      <h2>What</h2>
      <p>{data.mdx.frontmatter.tldr}</p>
      {children}
      <div style={Footer}>
        <br></br>
        <code>
          Go back to <Link to="/#projects">all projects</Link>, or{" "}
          <a href="mailto:n-trang@outlook.com">contact</a> me.
        </code>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tldr
        techstack
      }
    }
  }
`;
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Project;

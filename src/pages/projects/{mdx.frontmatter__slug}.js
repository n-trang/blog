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
        <p>
          <b>Tech stack</b>: {data.mdx.frontmatter.techstack}
        </p>
        <p>{data.mdx.frontmatter.tldr}</p>
      </center>
      <hr></hr>
      {children}
      <div style={Footer}>
        <hr></hr>
        <p>
          go back <Link to="/projects">all projects</Link>, or{" "}
          <a href="mailto:n-trang@outlook.com">contact</a> me.
        </p>
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

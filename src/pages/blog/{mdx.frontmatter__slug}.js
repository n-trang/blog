import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Footer = {
  bottom: "0",
  width: "100%",
};

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <center>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>TLDR: {data.mdx.frontmatter.tldr}</p>
      </center>
      <hr></hr>
      {children}
      <div style={Footer}>
        <hr></hr>
        <p>
          Go back to <Link to="/blog">all posts</Link>, or{" "}
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
        tldr
      }
    }
  }
`;
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

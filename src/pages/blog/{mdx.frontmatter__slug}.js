import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <center>
        <h1>{data.mdx.frontmatter.title}</h1>
      </center>
      {children}
      <hr></hr>
      <p>
        Go back to <Link to="/blog">all blog posts</Link>, or{" "}
        <a href="mailto:n-trang@outlook.com">contact me.</a>
      </p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

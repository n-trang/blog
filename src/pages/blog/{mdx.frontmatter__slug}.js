import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <center>
        <h1>{data.allMdx.frontmatter.title}</h1>
        <p>TLDR: {data.allMdx.frontmatter.tldr}</p>
      </center>
      <hr></hr>
      {children}
      {/* <p>Posted on {data.mdx.frontmatter.date}</p> */}
      <hr></hr>
      <p>
        Go back to <Link to="/blog">all blog posts</Link>, or{" "}
        <a href="mailto:n-trang@outlook.com">contact me.</a>
      </p>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          tldr
        }
        tableOfContents
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo title={data.allMmdx.frontmatter.title} />
);

export default BlogPost;

import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h2>I write along as I learn. Also some translations and essays.</h2>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>{node.frontmatter.tldr}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { folder: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          tldr
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="blog ✍️ | nguyen trang" />;

export default BlogPage;

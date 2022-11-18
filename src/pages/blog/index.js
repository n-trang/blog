import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h2>Some blogging and translation</h2>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <p>
            <Link to={`${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="blog ✍️ | nguyen trang" />;

export default BlogPage;

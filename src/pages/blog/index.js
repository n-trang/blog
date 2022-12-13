import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <p>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </p>
          <p>
            {node.frontmatter.tldr} ({node.frontmatter.date})
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
          date(formatString: "DD/MM/YYYY")
          title
          slug
          tldr
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="blog | nguyen trang" />;

export default BlogPage;

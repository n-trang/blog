import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Project = ({ data }) => {
  return (
    <Layout>
      <h2>✍️ some writing and translation </h2>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>{" "}
            {"|"} <code>{node.frontmatter.techstack}</code>
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
      filter: { frontmatter: { folder: { eq: "projects" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          techstack
          tldr
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="blog ✍️ | nguyen trang" />;

export default Project;
